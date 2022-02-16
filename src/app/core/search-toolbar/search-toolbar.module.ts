import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SearchToolbarComponent } from './search-toolbar.component';



@NgModule({
  declarations: [
    SearchToolbarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SearchToolbarComponent
  ]
})
export class SearchToolbarModule { }