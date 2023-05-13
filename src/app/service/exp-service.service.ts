import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../model/exp-laboral';

@Injectable({
  providedIn: 'root'
})
export class ExpServiceService {

  expURL = 'http://localhost:8080/explab/'

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable <ExpLaboral[]> {
    return this.httpClient.get<ExpLaboral[]>(this.expURL + 'lista');}

   public detail(id:number): Observable<ExpLaboral>{
    return this.httpClient.get<ExpLaboral>(this.expURL + 'detail/${id}');
  }

  public save(experiencia: ExpLaboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }
  public update(id:number, experiencia: ExpLaboral): Observable<any>{
    return this.httpClient.put<any>(this.expURL + 'update/${id}', experiencia);
  }
  public delete(id:number, experiencia: ExpLaboral): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + 'delete/${id}');
}
}
