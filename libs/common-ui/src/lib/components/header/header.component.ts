import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'omdb-search-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
