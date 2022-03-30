import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";
class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            // key é um identificador necessário para o React saber exatamente qual elemento
            // ele deve re-redenrizar
            <li key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
