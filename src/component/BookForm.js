import React, { Component } from "react";

class BookForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" name="nome" />

        <label htmlFor="livro">Livro</label>
        <input id="livro" type="text" name="livro" />

        <label htmlFor="preco">Preço</label>
        <input id="preco" type="text" name="preco" />

        <button type="button">Salvar</button>
      </form>
    );
  }
}

export default BookForm;
