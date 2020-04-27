import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const linhas = props.autores.map((linha, index) => {
    return (
      <tr key={index}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td>
          <button
            onClick={() => {
              props.removerAutor(index);
            }}
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{linhas}</tbody>;
};

class BookList extends Component {
  render() {
    const { autores, removerAutor } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody autores={autores} removerAutor={removerAutor} />
      </table>
    );
  }
}
export default BookList;
