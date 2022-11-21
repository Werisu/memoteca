import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css'],
})
export class ExcluirPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    autoria: '',
    conteudo: '',
    modelo: '',
    favorito: false
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if (this.pensamento.id) {
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      });
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }
}
