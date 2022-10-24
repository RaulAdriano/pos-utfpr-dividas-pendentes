import { DividaService } from './../divida.service';
import { Divida } from './../divida.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divida-read',
  templateUrl: './divida-read.component.html',
  styleUrls: ['./divida-read.component.scss']
})
export class DividaReadComponent implements OnInit {

  dividas: Divida[] = []; 
  displayedColumns = ['id', 'titulo', 'valor', 'action']
  
    constructor(private dividaService: DividaService) { }
  
    ngOnInit(): void {
      this.dividaService.read().subscribe(dividas =>{
        this.dividas = dividas
      })
  
    }
}
