import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptsComponent } from './pages/recepts/recepts.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { EditCategoriesComponent } from './pages/edit-categories/edit-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ReceptsComponent,
    NavbarComponent,
    CategoriesComponent,
    EditCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
