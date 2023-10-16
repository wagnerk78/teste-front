import { Component, OnInit } from '@angular/core';
import { Produtos } from './model/produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

produtos: Produtos[] = [
  {id: '1', descricao: 'Leite Condensado Moça', valor_custo: 2, imagem: '' },
  {id: '2', descricao: 'Coca-cola lata', valor_custo: 4.3, imagem: '' }
];
displayedColumns = ['id', 'descricao', 'valor_custo', 'delete', 'edit']


constructor(){

}

ngOnInit(): void {

}

}
