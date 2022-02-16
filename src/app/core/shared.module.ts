import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { MapboxComponent } from './mapbox/mapbox.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MapboxComponent,
    MenuComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    MapboxComponent,
    AngularMaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MenuComponent
  ]
})
export class SharedModule { }
