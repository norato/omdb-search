import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[omdbSearchForRange]',
  standalone: true,
})
export class ForRangeDirective implements OnInit {
  @Input('omdbSearchForRange') number?: number;
  private templateRef = inject(TemplateRef<unknown>);
  private viewContainerRef = inject(ViewContainerRef);

  ngOnInit() {
    const numbers = Array.from(Array(this.number), (_, i) => i + 1);
    for (const number of numbers) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { number });
    }
  }
}
