import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConceptService} from '../concept.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: String;
  setMembers: Array<String>;
  form: any;

  constructor(private route: ActivatedRoute, private router: Router, private conceptService: ConceptService) {
    this.route.params.subscribe(params => {
      this.name = params.name;
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    // const formConcept = this.conceptService.getConcept(this.name);
    // this.setMembers = this.conceptService.getSetMemberNames(formConcept);
    // console.log(this.setMembers);
    this.form = this.conceptService.getFormDetails();
    console.log('done');
  }

  recur(conceptName) {
    const concept = this.conceptService.getConcept(conceptName);
    this.setMembers = this.conceptService.getSetMemberNames(concept);
  }
}
