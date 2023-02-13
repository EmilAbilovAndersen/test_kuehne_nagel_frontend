import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesPage } from '../pages/citties/cities.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityComponent } from '../pages/citties/components/city/city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCityDialogComponent } from "../pages/citties/components/edit-city-dialog/edit-city-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    CitiesPage,
    CityComponent,
    EditCityDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    EditCityDialogComponent,
  ],
})
export class AppModule { }
