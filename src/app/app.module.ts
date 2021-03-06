import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  import { MatToolbarModule} from '@angular/material/toolbar'
  import { MatIconModule } from '@angular/material/icon';
  import { MatCardModule } from '@angular/material/card';
  import { MatButtonModule } from '@angular/material/button';
  import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
