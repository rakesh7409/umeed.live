import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patientt',
  templateUrl: './patientt.component.html',
  styleUrls: ['./patientt.component.css']
})
export class PatienttComponent {

  constructor(
    public dialogRef: MatDialogRef<PatienttComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
