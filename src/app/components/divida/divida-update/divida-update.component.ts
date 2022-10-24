import { Router, ActivatedRoute } from '@angular/router';
import { DividaService } from './../divida.service';
import { Divida } from './../divida.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divida-update',
  templateUrl: './divida-update.component.html',
  styleUrls: ['./divida-update.component.scss']
})
export class DividaUpdateComponent implements OnInit {

  divida!: Divida;

  constructor(
    private dividaService: DividaService, 
    private router: Router, 
    private route: ActivatedRoute){ 
    }

  ngOnInit(): void {
    // @ts-ignore: Object is possibly 'null'.
    const id = + this.route.snapshot.paramMap.get('id')
    this.dividaService.readByid(id!).subscribe(divida =>{
      this.divida = divida
    });
  }

  updateDivida(): void{
    this.dividaService.update(this.divida).subscribe(() => {
      this.dividaService.showMessage('Dívida Atualizada com sucesso!')
      this.router.navigate(['/dividas'])
    })
  }

  cancel() : void{
    this.router.navigate(['/dividas'])
  }

}
