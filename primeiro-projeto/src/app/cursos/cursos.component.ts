import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string

  cursos: string[]

  constructor(public cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training'

    this.cursos = this.cursosService.getCursos()

  }

}