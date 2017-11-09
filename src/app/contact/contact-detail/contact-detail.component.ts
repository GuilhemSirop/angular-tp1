import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContactService} from '../../shared/services/contact/contact.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent implements OnInit {

  selectedContact: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.contactService.getById(id).subscribe(
      res => this.selectedContact = res,
      err => console.log(err)
    );
  }

}
