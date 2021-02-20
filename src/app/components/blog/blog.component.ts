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

  ngOnInit(): void {
    this.postService.getAll()
      .then(listaposts => {
        this.posts = listaposts;
      })
  }

}
