import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
class App extends Component {
  constructor() {
    super();
    this.notas = [];
  }

  criarNota(titulo, texto) {
    const notaNota = { titulo, texto };
    this.notas.push(notaNota)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
