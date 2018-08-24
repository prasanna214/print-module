import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class ConceptComponent implements OnInit {

  @Input() concept: any;
  constructor() { }

  ngOnInit() {
  }

  isDataTypeCoded() {
    return this.concept.datatype.display === 'Coded';
  }

  isDataTypeTextOrNumeric() {
    return this.concept.datatype.display === 'Text' || this.concept.datatype.display === 'Numeric';
  }

  getConceptName() {
    for (const name of this.concept.names) {
      if (name.conceptNameType === 'SHORT') {
        return name.name;
      }
    }
  }
}
