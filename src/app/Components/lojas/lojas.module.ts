import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

import { LojasRoutingModule } from './lojas-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LojasRoutingModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule
  ]
})
export class LojasModule { }
