import React from "react";

const Table = ({ dados }) => {
  React.useEffect(() => {
    console.log(dados);
  }, [dados]);
  const returnStatus = (currentTime) => {
    if (
      currentTime !== null &&
      currentTime !== undefined &&
      currentTime !== ""
    ) {
      let passDate = new Date(currentTime);
      let now = new Date();
      let difference = now.getTime() - passDate.getTime();
      let differenceInDays = difference / (1000 * 3600 * 24);
      if (differenceInDays <= 2) return <td className="status isOkay"></td>;
      if (differenceInDays > 2 && differenceInDays <= 3)
        return <td className="status isAlert"></td>;
      if (differenceInDays > 3) return <td className="status isDanger"></td>;
    } else {
      return <td className="status isNotValid"></td>;
    }
  };
  const returnDateString = (currentDate) => {
    if (
      currentDate !== null &&
      currentDate !== undefined &&
      currentDate !== ""
    ) {
      let passDate = new Date(currentDate);
      passDate = passDate.toLocaleString("pt-br");
      return passDate;
    } else {
      return "00/00/0000 00:00:00";
    }
  };
  return (
    <>
      <table>
        <p className="sub-title">Consultas</p>
        <tr className="title">
          <th>Status</th>
          <th>Filial</th>
          <th>Última Consulta</th>
        </tr>
        {dados.map((item, index) => (
          <>
            {index !== 0 ? (
              <tr key={index}>
                {returnStatus(item[1])}
                <td>{item[0]}</td>
                <td>{returnDateString(item[1])}</td>
              </tr>
            ) : null}
          </>
        ))}
      </table>
      <p className="info">
        Consulte na tabela em cima, as últimas consultas do aplicativo consulta
        preço de cada filial.
      </p>
      <p>
        <span className="status-p isOkay"></span> - Status Verde significa que o
        período da última consulta é menor que um dia.{" "}
      </p>
      <p>
        <span className="status-p isAlert"></span> - Status Amarelo significa
        que o período é menor que 3 dias.
      </p>
      <p>
        <span className="status-p isDanger"></span> - Status Vermelho significa
        que é maior que 3 dias.
      </p>
      <p>
        <span className="status-p isNotValid"></span> - Status Cinza significa
        que ainda não existe nenhum registro.
      </p>
    </>
  );
};

export default Table;
