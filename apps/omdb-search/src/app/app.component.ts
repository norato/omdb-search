import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderComponent,
  ILink,
} from '@omdb-search/common-ui';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  selector: 'omdb-search-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  brand: ILink = {
    title: 'OMDB',
    link: '/',
  };
  links: ILink[] = [
    {
      title: 'Search',
      link: '/',
    },
    {
      title: 'Find',
      link: '/',
    },
  ];
}
