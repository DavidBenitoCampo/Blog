import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/services.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[]

  constructor(private postService: PostService) { this.posts = [] }

  ngOnInit(): void {
    this.postService.getAll()
      .then(listaposts => {
        this.posts = listaposts;
      })
  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.posts = await this.postService.getAll();
      } else {
        this.posts = await this.postService.getbyCategory($event.target.value);
      }
    } catch (error) {
      console.log(error);
    }

  }

}
