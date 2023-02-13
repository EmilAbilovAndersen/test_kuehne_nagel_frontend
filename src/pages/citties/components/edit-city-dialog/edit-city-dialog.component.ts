import {
  Component, Inject, OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { City } from '../../../../model/city.model';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city-dialog.component.html',
  styleUrls: ['./edit-city-dialog.component.scss'],
})
export class EditCityDialogComponent implements OnInit {

  public editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCityDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: City,
  ) {
    this.editForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      photo: new FormControl(''),
    });
  }

  public ngOnInit(): void {
    this.editForm.setValue({
      name: this.data.name,
      photo: this.data.photoUrl,
    })
  }

  public onSave(): void {
    this.dialogRef.close({
      id: this.data.id,
      name: this.editForm.get('name')?.value,
      photoUrl: this.editForm.get('photo')?.value,
    });
  }

  public onClose(): void {
    this.dialogRef.close();
  }

}
