import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // for Template-driven Form
import { ReactiveFormsModule } from '@angular/forms'; // for Reactive Form
import { AngularMaterailModule } from './angular-materail.module';

// pages.
import { AppComponent } from './app.component';
import { TemplateFormExampleComponent } from './pages/template-form-example/template-form-example.component';
import { ReactiveFormExampleComponent } from './pages/reactive-form-example/reactive-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormExampleComponent,
    ReactiveFormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
