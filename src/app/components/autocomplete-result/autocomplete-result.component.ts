import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'autocomplete-result',
  styles: [require('./autocomplete-result.style.scss')],
  template: require('./autocomplete-result.template.html')
})

export class AutocompleteResultComponent {
  @Input() result;
  private resource: any = {};

  ngOnInit() {
    if (this.result.agency) { // it's a repo with an agency attribute
      this.resource['iconId'] = 'assets/img/logos/agencies/' + this.result.agency  + '-50x50.png';
      this.resource['imageIcon'] = true;
      this.resource['url'] = '/explore-code/repos/' + this.result.repoID;
      this.resource['name'] = this.result.name;
    } else { // it's an agency
      this.resource['iconId'] = 'assets/img/logos/agencies/' + this.result.id  + '-50x50.png';
      this.resource['imageIcon'] = true;
      this.resource['url'] = '/explore-code/agencies/' + this.result.id;
      this.resource['name'] = this.result.name;
    }
  }
}
