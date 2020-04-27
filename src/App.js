import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";
import HeaderMenu from "./component/HeaderMenu";

class App extends Component {
  removerAutor = indiceSelecionado => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, atual) => {
        return atual !== indiceSelecionado;
      })
    });
  };

  salvarAutor = autor => {
    this.setState({
      autores: [...this.state.autores, autor]
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
        <HeaderMenu />
        <BookList
          autores={this.state.autores}
          removerAutor={this.removerAutor}
        />
        <BookForm salvarAutor={this.salvarAutor} />
      </div>
    );
  }
}

export default App;
