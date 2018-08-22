import {Component, OnInit} from '@angular/core';
import {ConceptService} from '../concept.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  concepts: Array<String>;
  searchKeyWord: String;
  concept: String;

  constructor(private conceptService: ConceptService) {
  }

  ngOnInit() {
    this.concepts =  this.conceptService.getFormConcepts().map(member => member.name.name);
  }

  private getConcept(conceptName) {
    this.concept = this.conceptService.getConcept(conceptName);
  }
}
