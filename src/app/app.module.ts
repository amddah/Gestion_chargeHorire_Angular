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
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiliereDetailComponent } from './filiere-detail/filiere-detail.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    FiliereComponent,
    ModuleComponent,
    DashbaordComponent,
    FiliereDetailComponent,
    LoginComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
