import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Url, Apis } from '../index.url';

// HttpOptions : Indica que sera el content Type por Json
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(public http: HttpClient ){}


//Error
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError('Something bad happened; please try again later.');
}

private extractData(res: Response) {
  let body = res;
  return body || { };
}




//FUNCIONES


  ObtenesEquipos(): Observable<any>{
    let apiUrl = `${Url + Apis.getTeams } `;
    console.log(apiUrl);
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }
}
