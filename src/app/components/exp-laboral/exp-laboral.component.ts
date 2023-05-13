import { Component } from '@angular/core';
import { ExpLaboral } from 'src/app/model/exp-laboral';
import { ExpServiceService } from 'src/app/service/exp-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent {
  experiencia: ExpLaboral[] = [];

  constructor(private ExpService:ExpServiceService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia():void{
    this.ExpService.lista().subscribe(
      data => this.experiencia = data
    )

  }
}
