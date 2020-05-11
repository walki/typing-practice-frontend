import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypingFieldComponent } from './typing-field/typing-field.component';
import { CurrentStatsComponent } from './current-stats/current-stats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreviousDaysComponent } from './previous-days/previous-days.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypingFieldComponent,
    CurrentStatsComponent,
    PreviousDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
