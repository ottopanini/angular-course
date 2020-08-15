import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  // used to prevent unnecessary update cycles
  visible = false;

  constructor(private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.template);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
