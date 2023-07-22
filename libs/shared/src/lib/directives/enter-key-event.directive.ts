import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[omdbSearchEnterKeyEvent]',
  standalone: true,
})
export class EnterKeyEventDirective {
  @Output() omdbSearchEnterKeyEvent = new EventEmitter();

  @HostListener('keyup.enter')
  onEnterKey() {
    this.omdbSearchEnterKeyEvent.emit();
  }
}
