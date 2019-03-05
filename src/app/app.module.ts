import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { GridComponentComponent } from './grid-component/grid-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HttpClientModule} from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    GridComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
