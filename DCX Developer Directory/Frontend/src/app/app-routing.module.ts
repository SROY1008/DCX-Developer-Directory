import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

import { BrowseComponent } from './browse/browse.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
   {
      path:'',
     component: SectionComponent

    },
 
{
  path:'browse',
    component:BrowseComponent
},
{
  path:'contact',
    component:ContactComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
