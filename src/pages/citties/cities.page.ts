import {
  Component,
  OnInit,
} from '@angular/core';
import { City } from "../../model/city.model";
import { CityService } from "../../services/city.service";
import { MatDialog } from "@angular/material/dialog";
import { EditCityDialogComponent } from "./components/edit-city-dialog/edit-city-dialog.component";


@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  public cities: City[] = [];
  public page = 1;
  public pageSize = 20;
  public search = '';
  public previousSearch = '';
  public totalPage = 0;

  constructor(
    private cityService: CityService,
    private dialog: MatDialog,
  ) { }

  public ngOnInit(): void {
    this.loadCities();
  }

  public onSearchChange(): void {
    if (this.search === this.previousSearch) {
      return;
    }
    this.previousSearch = this.search;
    this.page = 1;
    this.loadCities();
  }

  public onCantLoadImage(cityId: string): void {
    const city = this.cities.find(city => city.id === cityId);

    if (city) {
      city.photoUrl = '/assets/images/no-image.png';
    }
  }

  public onPrevious(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCities();
    }
  }

  public onNext(): void {
    if (this.page < this.totalPage) {
      this.page++;
      this.loadCities();
    }
  }

  public onEdit(city: City): void {
    const dialog = this.dialog.open(EditCityDialogComponent, {
      data: city,
    });

    dialog.afterClosed().subscribe(city => {
      if (city) {
        this.updateCity(city);
      }
    })
  }

  public onPageSizeChanged(): void {
    this.page = 1;
    this.loadCities();
  }

  private updateCity(city: City): void {
    this.cityService.update(city).subscribe(updatedCity => {
      if (!this.search) {
        const existingCity = this.cities.find(item => item.id === updatedCity.id);
        existingCity!.name = updatedCity.name;
        existingCity!.photoUrl = updatedCity.photoUrl;
        return;
      }
      this.loadCities();
    });
  }

  private loadCities(): void {
    this.cityService.getCities(this.page, this.pageSize, this.search).subscribe(
      cityPage => {
        this.cities = cityPage.data;
        this.totalPage = cityPage.pageNumber;
      },
    );
  }

}
