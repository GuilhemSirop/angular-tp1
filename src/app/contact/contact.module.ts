import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { RouterModule } from '@angular/router';
import {ContactService} from '../shared/services/contact/contact.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ContactListComponent, ContactDetailComponent, ContactInfoComponent],
  exports: [
    ContactListComponent,
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
