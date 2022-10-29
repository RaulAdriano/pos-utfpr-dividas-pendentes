import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pos-utfpr-dividas-pendentes';

  nomeAPP : string = 'Dívidas Pendentes';
  textoFooter : string = 'Desenvolvido por Raul Adriano Ramos - Pós UTFPR - Especialização Em Tecnologia Java';
  
}
