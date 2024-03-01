import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
