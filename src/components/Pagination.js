import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentPageHandle } from "../redux/slices/paginationSlice";

const arr = [...new Array(6).keys()].map((item) => item + 1);

const Pagination = () => {
  const data = useSelector((store) => store.pagination);
  const [slider, setSlider] = useState(arr);
  const dispatch = useDispatch();

  useEffect(() => {
    if (+data.totalPage < 6 && +data.totalPage > 0) {
      let num = data.totalPage < 0 ? 1 : data.totalPage;
      setSlider([...new Array(num).keys()].map((item) => item + 1));
    }
  }, [data]);

  const previousHandler = () => {
    if (data.currentPage !== 1) {
      let temp = [...slider];
      dispatch(currentPageHandle(data.currentPage - 1));
      if (temp[0] === 1) return;
      temp.unshift(temp[0] - 1);
      temp.pop();
      setSlider(temp);
    }
  };

  const nextHandler = () => {
    if (data.totalPage !== data.currentPage) {
      if (data.currentPage >= 6) {
        let temp = [...slider];
        temp.push(data.currentPage + 1);
        temp.shift();
        setSlider(temp);
      }
      dispatch(currentPageHandle(data.currentPage + 1));
    }
    console.log(slider);
  };

  const currentPageClickHandler = (clickedPage) => {
    dispatch(currentPageHandle(clickedPage));
    console.log(slider);
  };

  return (
    <div className="flex items-center">
      <button className="mr-2" onClick={previousHandler}>
        Previous
      </button>
      <div>
        {slider.map((item) => (
          <button
            className={
              item === data.currentPage
                ? "border m-1 px-2 rounded-sm bg-blue-500 text-white"
                : "border m-1 px-2 rounded-sm"
            }
            onClick={() => currentPageClickHandler(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={nextHandler} className="ml-2">
        Next
      </button>
    </div>
  );
};

export default Pagination;
