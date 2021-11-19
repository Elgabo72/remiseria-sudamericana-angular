import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SpinnerComponent, ModalDialogComponent, ModalContentComponent],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule,
  ],
  exports: [
    SpinnerComponent, ModalDialogComponent, ModalContentComponent
  ], entryComponents: [
    // ModalDialogComponent
  ]
})
export class ComponentsModule { }
