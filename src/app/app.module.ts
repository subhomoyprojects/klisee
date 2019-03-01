import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
// Metarial Import
import { MetarialModule } from './metarial/metarial/metarial.module';

@NgModule({
  declarations: [
    AppComponent
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
