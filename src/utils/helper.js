export const sortListByType = (isIncrement, sortByType, totalData) => {
  console.log(isIncrement, sortByType, totalData);
  let current = [];
  if (isIncrement) {
    current = totalData.slice().sort((a, b) => {
      if (sortByType === "name") {
        let l1 = `${a.firstName} ${a.lastName}`;
        let l2 = `${b.firstName} ${b.lastName}`;
        return l1.localeCompare(l2);
      } else if (sortByType === "startDate") {
        let l1 = new Date(a.startDate);
        let l2 = new Date(b.startDate);
        return l1 - l2;
      } else if (typeof a[sortByType] === "string") {
        return a[sortByType].localeCompare(b[sortByType]);
      }
      return a[sortByType] - b[sortByType];
    });
  }

  if (!isIncrement) {
    current = totalData.slice().sort((a, b) => {
      if (sortByType === "name") {
        let l1 = `${a.firstName} ${a.lastName}`;
        let l2 = `${b.firstName} ${b.lastName}`;
        return l2.localeCompare(l1);
      } else if (sortByType === "startDate") {
        let l1 = new Date(a.startDate);
        let l2 = new Date(b.startDate);
        return l2 - l1;
      } else if (typeof a[sortByType] === "string") {
        return b[sortByType].localeCompare(a[sortByType]);
      }
      return b[sortByType] - a[sortByType];
    });
  }

  return current;
};

export const searchByInput = (searchInput, totalData) => {
  return totalData.filter((item) => {
    return (
      item.firstName?.toLowerCase()?.includes(searchInput?.toLowerCase()) ||
      item.lastName?.toLowerCase()?.includes(searchInput?.toLowerCase()) ||
      item.position?.toLowerCase()?.includes(searchInput?.toLowerCase()) ||
      item.office?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
  });
};
