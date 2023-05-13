import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpServiceService } from 'src/app/service/exp-service.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private ExpService:ExpServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new ExpLaboral(this.nombreE, this.descripcionE);
    this.ExpService.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
