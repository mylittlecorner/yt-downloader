import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputPageModule } from './modules/input-page/input-page.module';

@NgModule({
  imports: [BrowserModule, FormsModule, InputPageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
