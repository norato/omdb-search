import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ILink } from '../../interfaces/link.types';

@Component({
  selector: 'omdb-search-footer',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() copyright?: string;
  @Input() links?: ILink[];

  year = new Date().getFullYear();
}
