import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input() contact;
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  deleteContact(id) {
    this.onDelete.emit(id);
  }
}
