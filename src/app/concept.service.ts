import {Injectable} from '@angular/core';
import * as data from './data.json';
import * as form from './form.json';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor() {
  }

  getFormConcepts() {
    return data.results[0].setMembers;
  }

  getConcept(conceptName) {
    const concepts = this.getFormConcepts();
    for (const concept of concepts) {
      const names = concept.names;
      for (const name of names) {
        if (name.name === conceptName && name.conceptNameType === 'FULLY_SPECIFIED') {
          return concept;
        }
      }
    }
  }

  getSetMemberNames(concept) {
    return concept.setMembers.map(member => member.name.name);
  }

  getFormDetails() {
    return form;
  }
}
