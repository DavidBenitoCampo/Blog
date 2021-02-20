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
    this.posts.push(nuevoPost);
  }

  getAll(): Post[] {
    return this.posts;
  }
}

