import { Pensamento } from './pensamento';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

const API = environment.API;
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { }

  public listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(`${API}/pensamentos`)
  }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(`${API}/pensamentos`, pensamento)
  }
}
