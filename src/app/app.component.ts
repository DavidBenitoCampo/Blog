import { Component } from '@angular/core';
import { Post } from './post.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  arrPost: Post[]

}
