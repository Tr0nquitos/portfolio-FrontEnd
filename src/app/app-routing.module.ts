import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NewExperienciaComponent } from './components/exp-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/exp-laboral/edit-experiencia.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
