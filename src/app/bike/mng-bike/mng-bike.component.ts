import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BikeService } from '../../../app/service/bike.service';
import { BikeDto } from '../../../assets/dto';

@Component({
  selector: 'app-mng-bike',
  templateUrl: './mng-bike.component.html',
  styleUrls: ['./mng-bike.component.css'],
})
export class MngBikeComponent implements OnInit {
  _data: any = {};
  _bike?: BikeDto;
  form: FormGroup = new FormGroup({
    color: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    latitud: new FormControl(0, [Validators.required]),
    longitud: new FormControl(0, [Validators.required]),
  });
  colors: Array<string> = ['Blanco', 'Negro', 'Rojo', 'Verde', 'Turquesa'];
  models: Array<string> = ['Ruta', 'Cross', 'Montain', 'Turismo'];
  _color: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<MngBikeComponent>,
    readonly bikeService: BikeService
  ) {
    this._data = data;
    if (this._data.bike) {
      this._bike = this._data.bike as BikeDto;
      this._color = this._bike.color ?? '';
      this.form.patchValue({
        color: this._bike.color,
        model: this._bike.model,
        latitud: this._bike.latitud,
        longitud: this._bike.longitud,
      });
    }
  }

  ngOnInit(): void {}
  submit = () => {
    if (!this._bike) {
      this._bike = { ...this.form.value } as BikeDto;
      this._bike.Key = '';
      this.bikeService.new(this._bike).subscribe((bk: BikeDto) => {
        this.dialogRef.close(bk);
      });
    } else {
      const updated = { ...this.form.value } as BikeDto;
      this._bike.color = updated.color;
      this._bike.model = updated.model;
      this._bike.latitud = updated.latitud;
      this._bike.longitud = updated.longitud;
      this.bikeService.update(this._bike).subscribe((bk: BikeDto) => {
        this.dialogRef.close(bk);
      });
    }
  };
}
