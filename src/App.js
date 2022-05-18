import React from "react";
import Table from "./Components/Table";
import "./Components/Table.css";

function App() {
  const apiUrl = "http://panoramavm.no-ip.info:9999";
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [data, setData] = React.useState(null);

  async function getData() {
    const response = await fetch(`${apiUrl}/api/logs`);
    const jsonResponse = await response.json();
    setIsLoaded(true);
    setData(jsonResponse);
  }
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <h1>Relatório de Consultas por Filial</h1>

      {isLoaded && data ? (
        <Table dados={data} />
      ) : (
        <div className="loadingState"></div>
      )}
    </div>
  );
}

export default App;
