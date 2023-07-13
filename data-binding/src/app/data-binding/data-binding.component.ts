import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImage = 'https://source.unsplash.com/featured/300x201'
  isMouseOver: boolean = false

  getValor() {
    return 1
  }

  getCurtiCurso() {
    return true
  }

  botaoClicado() {
    alert('Botão clicado!!')
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value)
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  constructor() {

  }

}
