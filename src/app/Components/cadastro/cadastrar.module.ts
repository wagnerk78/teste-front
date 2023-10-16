import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LojasComponent } from '../lojas/lojas/lojas.component';
import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';



@NgModule({
  declarations: [
    CadastrarComponent,
    LojasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CadastrarRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule

  ]
})
export class CadastrarModule { }
