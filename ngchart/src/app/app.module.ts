import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JointComponent } from './home/joint.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeModule } from '@circlon/angular-tree-component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import {DragDropModule,CDK_DRAG_CONFIG} from '@angular/cdk/drag-drop';
import { ColorPickerModule } from 'ngx-color-picker';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { SelectContactComponent } from './select-contact/select-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [AutocompleteLibModule, BrowserModule, FormsModule,NgbModule ,TreeModule,HttpClientModule,DragDropModule,OverlayModule,ColorPickerModule, AppRoutingModule],
  declarations: [ AppComponent, JointComponent, SelectContactComponent, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],


})
export class AppModule { }
