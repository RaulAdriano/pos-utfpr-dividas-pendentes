import { Router } from '@angular/router';
import { DividaService } from './../divida.service';
import { Divida } from './../divida.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divida-create',
  templateUrl: './divida-create.component.html',
  styleUrls: ['./divida-create.component.scss']
})
export class DividaCreateComponent implements OnInit {

  divida: Divida = {
    nomeCredor: '',
    documentoCredor: '',
    titulo: '',
    valor: 0,
    formaPagamento: '',
    houveParcelamento : '',
    numeroParcelas: 0,
    status : ''
  }

  constructor(private dividaService: DividaService, private router: Router) { }

  ngOnInit(): void {
  }

  createDivida(): void{
    this.dividaService.create(this.divida).subscribe( () => {
      this.dividaService.showMessage('Dívida Cadastrada!')
      this.router.navigate(['/dividas'])
    })

   
  }

  cancel(): void{
    this.router.navigate(['/dividas'])
  }

}
