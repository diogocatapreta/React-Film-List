import React, { Component } from "react";
import "./styles.css";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";

class App extends Component {
  removerAutor = indiceSelecionado => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, atual) => {
        return atual !== indiceSelecionado;
      })
    });
  };

  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000"
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99"
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150"
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100"
      },
      {
        nome: "Nico",
        livro: "Java",
        preco: "9999"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>BookList</h1>
        <BookList
          autores={this.state.autores}
          removerAutor={this.removerAutor}
        />
        <BookForm />
      </div>
    );
  }
}

export default App;
