import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, HeaderLink } from '@omdb-search/common-ui';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'omdb-search-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  brand: HeaderLink = {
    title: 'OMDB',
    link: '/',
  };
  links: HeaderLink[] = [
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
