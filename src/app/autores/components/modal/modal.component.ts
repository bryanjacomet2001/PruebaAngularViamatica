import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AutoresServices } from '../../services/autores.service';
import { Obras } from '../../interface/obras.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  obras!: Obras[];
  obrasRandom!: Obras[];

  constructor(@Inject(MAT_DIALOG_DATA) public msg: string, private autoresServices: AutoresServices, 
              private dialogRefModal: MatDialogRef<ModalComponent> ) { }

  ngOnInit(): void {
    
    this.autoresServices.getAutoresObras(this.msg)
    .subscribe(obras => this.obras = obras);
    
    this.autoresServices.getObrasRandom()
    .subscribe(obras =>{
      this.obrasRandom = obras;
    });
  }
  
  agregarObrasFavoritos(obra: Obras): void{
    this.autoresServices.agregarObrasFavoritas(obra);
  }

  closeDialog(){
    this.dialogRefModal.close();
  }
}
