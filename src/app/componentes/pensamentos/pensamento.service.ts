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

  public editar(pensamneto: Pensamento): Observable<Pensamento>{
    const url = `${API}/pensamentos/${pensamneto.id}`;
    return this.http.put<Pensamento>(url, pensamneto);
  }

  public excluir(id: number): Observable<Pensamento>{
    const url = `${API}/pensamentos/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  public buscarPorId(id: number): Observable<Pensamento>{
    const url = `${API}/pensamentos/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
