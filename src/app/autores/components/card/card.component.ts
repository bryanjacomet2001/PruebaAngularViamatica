import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() autores: string[] = [];

  constructor( private matDialog: MatDialog ) { }

  openDialog(autor: string): MatDialogRef<ModalComponent>{
      return this.matDialog.open(ModalComponent, {
      width: '1400px',
      height: '600px',
      data: autor
    });
  }
}
