import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  constructor() {
    console.log('Directive created..');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return true;
  }

}
