import { Component, OnInit, Input } from '@angular/core';
import { CursoModel } from '../model/curso.model';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

//  @Input()
  private cursos: CursoModel[] = []

  constructor() { }

  ngOnInit() {
    let vendas:CursoModel = new CursoModel()
    vendas.imagem ="assets/img/venda.jpg"
    vendas.imagemAlt ="Apertão de mão (Venda)" 
    vendas.nome = "Atendimento ao cliente com enfase em vendas"
    vendas.descricao = "Torne-se um vendedor preparado para o mercado de trabalho."
    this.cursos.push(vendas)
    let assistenteAdm:CursoModel = new CursoModel()
    assistenteAdm.imagem = "assets/img/asisstente-adm.jpg"
    assistenteAdm.imagemAlt = "Assistente administrativo"
    assistenteAdm.nome = "Assistente administrativo e departamento pessoal"
    assistenteAdm.descricao = "Torne-se um assistente administrativo preparado e capacitado com este curso."
    this.cursos.push(assistenteAdm)
    let secretariado:CursoModel = new CursoModel()
    secretariado.imagem = "assets/img/secretariado.jpg"
    secretariado.imagemAlt = "Secretariado"
    secretariado.nome = "Secretariado"
    secretariado.descricao = "Torne-se um(a) secretário(a) pronto para o mercado de trabalho."
    this.cursos.push(secretariado)
    let marketingPessoal:CursoModel = new CursoModel()
    marketingPessoal.imagem = "assets/img/mkt-pessoal.jpg"
    marketingPessoal.imagemAlt = "Marketing pessoal"
    marketingPessoal.nome = "Marketing pessoal"
    marketingPessoal.descricao = "Aprenda a fazer uma boa apresentação pessoal em entrevistas de emprego."
    this.cursos.push(marketingPessoal)
  }

}
