import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ProdutosComponent

  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule
  ]
})
export class ProdutosModule { }
