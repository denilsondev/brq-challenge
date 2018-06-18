import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SaqueService } from './services/saque.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SaqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
