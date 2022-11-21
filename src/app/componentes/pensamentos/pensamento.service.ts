import { Pensamento } from './pensamento';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.API;
@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  constructor(private http: HttpClient) {}

  public listar(pagina: number, filtro: string): Observable<Pensamento[]> {
    const itensPorPagina = 6;
    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina);

    if(filtro?.trim().length > 2) {
      params = params.set("q", filtro)
    }

    return this.http.get<Pensamento[]>(`${API}/pensamentos`, {
      params
    });
  }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(`${API}/pensamentos`, pensamento);
  }

  public editar(pensamneto: Pensamento): Observable<Pensamento> {
    const url = `${API}/pensamentos/${pensamneto.id}`;
    return this.http.put<Pensamento>(url, pensamneto);
  }

  public mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
  }

  public excluir(id: number): Observable<Pensamento> {
    const url = `${API}/pensamentos/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  public buscarPorId(id: number): Observable<Pensamento> {
    const url = `${API}/pensamentos/${id}`;
    return this.http.get<Pensamento>(url);
  }
}
