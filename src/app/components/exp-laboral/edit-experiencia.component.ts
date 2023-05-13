import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpServiceService } from 'src/app/service/exp-service.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent {
  ExpLab: ExpLaboral = null;

  constructor(private ExperienciaService: ExpServiceService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.ExperienciaService.detail(id).subscribe(
      data =>{
        this.ExpLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.ExperienciaService.update(id, this.ExpLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }


}
