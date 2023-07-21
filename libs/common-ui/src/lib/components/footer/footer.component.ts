import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'omdb-search-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
