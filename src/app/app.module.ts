import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiliereComponent } from './filiere/filiere.component';
import { ModuleComponent } from './module/module.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DashbaordComponent } from './dashbaord/dashbaord.component';


@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    FiliereComponent,
    ModuleComponent,
    DashbaordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
