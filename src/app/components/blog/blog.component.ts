import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/services.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[]

  constructor(private postService: PostService) { }

  async ngOnInit() {
    if (localStorage.getItem('posts')) {
      const stringArray = localStorage.getItem('posts');
      this.posts = JSON.parse(stringArray);
    } else {
      this.posts = [];
    };
    this.posts = (await this.postService.getAll()).reverse();
    //Recuperar el localStorage.


  }
  async onClick($event) {

    console.log($event)
    this.posts = await this.postService.getbyCategory($event);


  }



}
