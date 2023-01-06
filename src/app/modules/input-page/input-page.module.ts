import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { DownloadButtonComponent } from './download-button/download-button.component';

@NgModule({
  declarations: [MainComponent, InputboxComponent, DownloadButtonComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class InputPageModule {}
