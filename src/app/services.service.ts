import { Injectable } from '@angular/core';

export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: number;
  categoria: string;


}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]


  constructor() {
    this.posts = [


    ]
  }

  add(nuevoPost: Post) {
    return new Promise((resolve, reject) => {
      this.posts.push(nuevoPost);
      console.log(this.posts)
      resolve(this.posts);
    });
  }

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts);
    })

  }
}

