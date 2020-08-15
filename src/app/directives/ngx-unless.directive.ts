import {Directive, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  constructor(private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

}
