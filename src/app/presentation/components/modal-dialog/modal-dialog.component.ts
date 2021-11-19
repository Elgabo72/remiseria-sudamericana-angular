import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit, OnChanges {
  @Output()
  closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {
    const dialogRef = this.dialog.open(ModalContentComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.closeModalEvent.emit(false);
      // this.ngOnDestroy();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {


  }

  ngOnInit(): void {

  }

}


