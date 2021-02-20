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
      { titulo: 'Me llamo Ralph', texto: 'mi mono ameyo y yo', autor: 'Doctalanstrum', imagen: 'https://static.wikia.nocookie.net/lossimpson/images/1/14/Ralph_Wiggum.png/revision/latest/scale-to-width-down/284?cb=20150426070659&path-prefix=es', fecha: 21 / 7 / 2010, categoria: 'terror' },
      { titulo: 'Batman es mi amigo', texto: 'me encontré a batman el otro día en el bar y me hice amigo suyo', autor: 'Joker', imagen: 'https://i1.wp.com/blog.arielesteban.net/wp-content/uploads/2016/07/batman-blog.jpg?zoom=2&resize=600%2C335', fecha: 21 / 2 / 2019, categoria: 'comedia' },
      { titulo: 'Cuando conocí a Bobobo', texto: 'cuando concí a Bobobo me enseñó el ataque de los pelos nasales', autor: 'David Benito Campo', imagen: 'https://2img.net/h/1.bp.blogspot.com/_8j0V0hraF8w/SxQie7fXCrI/AAAAAAAABlo/RpYxDhsBO50/s1600/Bobobo-boBo-bobo4.jpg', fecha: 21 / 12 / 2012, categoria: 'amor' },
      { titulo: 'Momentazo con el chiquito de la calzada', texto: 'Hablé con el del torito bravo y de la mandanga', autor: 'El Fary', imagen: 'https://ep00.epimg.net/elpais/imagenes/2017/11/11/album/1510394443_443393_1510395092_album_normal.jpg', fecha: 21 / 3 / 2002, categoria: 'terror' },
      { titulo: 'Superman sin capa me hizo la colada', texto: 'Me lo encontré en la lavanderia a Superman sin capa, fue tan amable que me hizo la colada', autor: 'Aitor tilla', imagen: 'https://www.karengranja.com/wp-content/uploads/2020/09/DSC_4678-700x700.jpg', fecha: 21 / 5 / 2019, categoria: 'comedia' },

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

