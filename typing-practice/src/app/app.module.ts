import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypingFieldComponent } from './typing-field/typing-field.component';
import { CurrentStatsComponent } from './current-stats/current-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypingFieldComponent,
    CurrentStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
