import './App.css';
import Header from './components/Header';
import PaginationContainer from './components/PaginationContainer';
import Table from './components/Table';

function App() {
  return (
    <div className="container">
      <Header />
      <Table />
      <PaginationContainer />
    </div>
  );
}

export default App;
