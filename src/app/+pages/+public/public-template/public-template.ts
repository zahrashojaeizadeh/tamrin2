import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-public-template',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './public-template.html',
  styleUrl: './public-template.scss',
})
export class PublicTemplate {

}
