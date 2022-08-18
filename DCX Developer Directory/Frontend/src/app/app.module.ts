import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { UrlserviceService } from './urlservice.service';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';

import { BrowseComponent } from './browse/browse.component';
import { ContactComponent } from './contact/contact.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
  
    SectionComponent,
    FooterComponent,
   
    BrowseComponent,
    ContactComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UrlserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
