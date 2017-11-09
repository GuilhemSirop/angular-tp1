import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactService } from '../../shared/services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  listContacts = [];
  selectedContact: any;

  constructor(
    private contactService: ContactService
  ) {
  }

  ngOnInit() {
    this.contactService.get().subscribe(
      res => this.listContacts = res,
      err => console.log(err)
    );
  }

  showCurrent(id) {
    this.contactService.getById(id).subscribe(
      res => this.selectedContact = res,
      err => console.log(err)
    );
  }

  onDeleteTrigger(id) {
    /*
    // On parcours le tableau à l'envers pour éviter les erreurs de splice
    const newTable = [];
    for (const i in this.listContacts) {
      if (this.listContacts[i].id !== id) {
        newTable.push(this.listContacts[i]);
      }
    }
    this.listContacts = newTable;
    */

    // TECHNIQUE PLUS SIMPLE
    this.listContacts = this.listContacts.filter(aContact => aContact.id !== id);
    alert('supprimé !');
  }

}
