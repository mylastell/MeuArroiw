import React, { Component } from 'react';

export default class App extends Component{


 mensagem = () => {
   return <h2>Temos uma mensagem para você!</h2>
 } 

 dobro = (numero) => {
  return <h1>O dobro do número: {numero * 2}</h1>
}

render (){

  return(
  <div>
      {this.mensagem()}
      {this.dobro(4)}
  </div>
  )
 }
}
