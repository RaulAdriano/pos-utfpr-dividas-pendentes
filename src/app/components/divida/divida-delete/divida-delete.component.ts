import { ActivatedRoute, Router } from '@angular/router';
import { DividaService } from './../divida.service';
import { Divida } from './../divida.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divida-delete',
  templateUrl: './divida-delete.component.html',
  styleUrls: ['./divida-delete.component.scss']
})
export class DividaDeleteComponent implements OnInit {

  divida!: Divida

  constructor(
    private dividaService: DividaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // @ts-ignore: Object is possibly 'null'.
    const id = +this.route.snapshot.paramMap.get('id')
    this.dividaService.readByid(id!).subscribe(divida =>{
      this.divida = divida
    })
  }

  deleteDivida(): void{
    this.dividaService.delete(this.divida.id!).subscribe(() => {
      this.dividaService.showMessage('Divida Excluida com sucesso!')
      this.router.navigate(['/dividas'])
    })
  }

  cancel(): void{
    this.router.navigate(['/dividas'])
  }

}
