import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {
  @Input('confirm') execFunction: Function;

  @HostListener('click', ['$event']) 
  onclick() {
    const confirmed = window.confirm('Estás seguro de querer guardar?');
    if (confirmed) {
      this.execFunction();
    }
  }
}
