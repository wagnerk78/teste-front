import { Component, OnInit } from '@angular/core';

import { Lojas } from './model/lojas';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})
export class LojasComponent implements OnInit {
ngOnInit(): void {

}

lojas: Lojas[ ] = [
  {id: '1', nome: 'Loja 1', valor_venda: 3},
  {id: '2', nome: 'Loja 2', valor_venda: 5}
];
displayedColumns = ['add', 'nome', 'valor_venda', 'delete', 'edit']




}
