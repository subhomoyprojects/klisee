import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
// Metarial Import
import { MetarialModule } from './metarial/metarial.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetarialModule // Metarial Module Add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
