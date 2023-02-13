import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { City } from '../../../../model/city.model';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {

  @Input()
  public city!: City;

  @Output()
  public onEditEmitter = new EventEmitter<City>;

  public errorImage = false;

  public onEdit(): void {
    this.onEditEmitter.emit(this.city);
  }

  public onCantLoadImage() {
    this.errorImage = true;
  }

}
