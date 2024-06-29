import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialCreateComponent } from './tutorial-create/tutorial-create.component';
import { TutorialUpdateComponent } from './tutorial-update/TutorialUpdateComponent';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    TutorialCreateComponent,
    TutorialUpdateComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
