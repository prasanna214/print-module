import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() setMember: any;

  constructor() {
  }

  ngOnInit() {
  }

  getConceptName() {
    for (const name of this.setMember.names) {
      if (name.conceptNameType === 'SHORT') {
        return name.name;
      }
    }
  }

  recur(conceptName) {

  }
}
