import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ModuleComponent } from './module/module.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    NavComponent,
    FiliereComponent,
    ModuleComponent,
    FormElementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
