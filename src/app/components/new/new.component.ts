
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post, PostService } from 'src/app/services.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  posts: Post[]
  formulario: FormGroup;

  constructor(private postService: PostService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      categoria: new FormControl(),
      fecha: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  async onSubmit() {

    const nuevoArr = await this.postService.add(this.formulario.value)
    this.formulario.reset();

  }
}
