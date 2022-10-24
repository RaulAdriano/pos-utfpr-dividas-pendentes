import { Divida } from './divida.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DividaService {
  baseURL = "http://localhost:3001/dividas"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg : string): void{
    this.snackBar.open(msg,'X' , {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(divida: Divida): Observable<Divida>{
    return this.http.post<Divida>(this.baseURL, divida)
  }

  read(): Observable<Divida[]>{
    return this.http.get<Divida[]>(this.baseURL)
  }

  readByid(id: number) : Observable<Divida>{
    const url = `${this.baseURL}/${id}`
    return this.http.get<Divida>(url)
  }

  update(divida: Divida) : Observable<Divida>{
    const url = `${this.baseURL}/${divida.id}`
    return this.http.put<Divida>(url,divida)
  }

  delete(id: number): Observable<Divida>{
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Divida>(url)
  }
}
