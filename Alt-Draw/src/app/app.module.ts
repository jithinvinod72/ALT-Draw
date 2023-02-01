import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { DrawingBoardComponent } from './drawing-board/drawing-board/drawing-board.component';
import { DrawingToolsComponent } from './drawing-tools/drawing-tools/drawing-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrawingBoardComponent,
    DrawingToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
