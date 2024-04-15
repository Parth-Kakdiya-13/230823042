import './App.css';
import DynamicTable from './components/DynamicTable';
import Table from './components/Table';
import list from './components/list.json';
import data from './components/data.json';
import Content from './components/Content';

function App() {

  const jsonData = [
    { "Sr.No.": 1, "Co": 1, "Statement": 'Understand Basic of Computer', "K-Levels": "K1,K2" },
    { "Sr.No.": 2, "Co": 2, "Statement": 'Calssify network types and devices', "K-Levels": "K2" },
    { "Sr.No.": 3, "Co": 3, "Statement": 'Explain applications of internet', "K-Levels": "K2" },
    { "Sr.No.": 4, "Co": 4, "Statement": 'Understand of Emerging Technologies', "K-Levels": "K2,K3" },
    { "Sr.No.": 5, "Co": 5, "Statement": 'Protect own pc from virus', "K-Levels": "K2,K3" }
  ];

  return (
    <div style={{ width: "700px", margin: "0 auto" }}>
      <Table />
      <Content data={data} />
      <DynamicTable data={jsonData} />
      <Content data={list} />
    </div>
  );
}

export default App;
