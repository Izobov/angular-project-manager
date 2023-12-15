import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content.component';
import { LeftContentModule } from './LeftContent/left-content.module';

@NgModule({
  declarations: [ContentComponent ],
  imports: [
    BrowserModule,
    LeftContentModule
  ],
  exports: [ContentComponent],
  providers: [],
  bootstrap: [ContentComponent]
})
export class ContentModule { }