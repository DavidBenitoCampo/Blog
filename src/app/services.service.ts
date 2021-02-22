import { Injectable } from '@angular/core';
import { rejects } from 'assert';

export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: string;


}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]


  constructor() {
    this.posts = [
      { titulo: 'Me llamo Ralph', texto: 'Mi mono ameyo y yo', autor: 'Doctalanstrum', imagen: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/01/The-Simpsons-Ralph-Chief-Wiggum-2.jpg?q=50&fit=crop&w=960&h=500', fecha: new Date(' 21 / 7 / 2010'), categoria: 'terror' },
      { titulo: 'Batman es mi amigo', texto: 'Me encontré a batman en el bar', autor: 'Joker', imagen: 'https://i1.wp.com/blog.arielesteban.net/wp-content/uploads/2016/07/batman-blog.jpg?zoom=2&resize=600%2C335', fecha: new Date('21 / 2 / 2019'), categoria: 'comedia' },
      { titulo: 'Cuando conocí a Bobobo', texto: 'Cuando concí a Bobobo me enseñó el ataque de los pelos nasales', autor: 'David Benito Campo', imagen: 'https://2img.net/h/1.bp.blogspot.com/_8j0V0hraF8w/SxQie7fXCrI/AAAAAAAABlo/RpYxDhsBO50/s1600/Bobobo-boBo-bobo4.jpg', fecha: new Date('21 / 12 / 2012'), categoria: 'amor' },
      { titulo: 'Momentazo con el chiquito de la calzada', texto: 'Hablé con el del torito bravo y de la mandanga', autor: 'El Fary', imagen: 'https://ep00.epimg.net/elpais/imagenes/2017/11/11/album/1510394443_443393_1510395092_album_normal.jpg', fecha: new Date('21 / 3 / 2002'), categoria: 'terror' },
      { titulo: 'Superman sin capa me hizo la colada', texto: 'Me lo encontré en la lavanderia a Superman sin capa', autor: 'Aitor tilla', imagen: 'https://www.karengranja.com/wp-content/uploads/2020/09/DSC_4678-700x700.jpg', fecha: new Date('21 / 5 / 2019'), categoria: 'comedia' },

    ]
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  add(nuevoPost: Post) {
    return new Promise((resolve, reject) => {
      this.posts.push(nuevoPost);
      console.log(this.posts)
      localStorage.setItem('posts', JSON.stringify(this.posts));
      resolve(this.posts = JSON.parse(localStorage.getItem('posts')));
    });
  }

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts = JSON.parse(localStorage.getItem('posts')));
    })

  }

  getbyCategory(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = [];
      this.posts = JSON.parse(localStorage.getItem('posts'))
      for (let post of this.posts) {
        if (post.categoria === pCategoria) {
          arrFiltrado.push(post);
        }
      }
      resolve(arrFiltrado);
    });
  }

  getbyCategory_V2(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts.filter(post => post.categoria === pCategoria));
    })
  }

  getCategory(): string[] {
    const arrNuevo = this.posts.map(post => post.categoria);
    return [...new Set(arrNuevo)];

  }
}

