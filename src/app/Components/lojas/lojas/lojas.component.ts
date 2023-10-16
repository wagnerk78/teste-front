import { Component, OnInit } from '@angular/core';

import { Lojas } from './model/lojas';
import { MatDialog } from '@angular/material/dialog';
import { LojaFormDialogComponent } from './loja-form-dialog/loja-form-dialog.component';

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
  {id: '2', nome: 'Loja 2', valor_venda: 5},
  {id: '3', nome: 'Loja 3', valor_venda: 7}
];
displayedColumns = ['add', 'nome', 'valor_venda', 'delete', 'edit']

constructor(public dialog: MatDialog) {}

openDialog(): void {
  const dialogRef = this.dialog.open(LojaFormDialogComponent, {
   width: '700px'
  });


  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
}





