import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-divida-crud',  
  templateUrl: './divida-crud.component.html',
  styleUrls: ['./divida-crud.component.scss']
})
export class DividaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
    title: 'Cadastro de Dívidas',
    icon:'payment',
    routeUrl:'/dividas'
   }
  }

  ngOnInit(): void {
  }

  navigateToDividasCreate(): void {
    this.router.navigate(['/dividas/create'])
  }
}
