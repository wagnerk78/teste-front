import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-loja-form-dialog',
  templateUrl: './loja-form-dialog.component.html',
  styleUrls: ['./loja-form-dialog.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    MatDialogModule, MatToolbarModule, MatIconModule

  ],
})
export class LojaFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LojaFormDialogComponent>) { }

  ngOnInit() {
  }

  cancelar(): void {
    this.dialogRef.close();
  }


}
