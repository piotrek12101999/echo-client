import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILog, IDBLog } from "src/app/models/logs.model";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private _logRoute = `${environment.apiURL}/logs`;

  private _httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private _http: HttpClient) {}

  getLogs(name: string): Observable<IDBLog[]> {
    return this._http
      .get<IDBLog[]>(`${this._logRoute}?name=${name}`)
      .pipe(catchError(this._handleError<IDBLog[]>([])));
  }

  addLog(data: ILog): Observable<IDBLog> {
    return this._http
      .post<IDBLog>(`${this._logRoute}`, data, this._httpOptions)
      .pipe(catchError(this._handleError<IDBLog>()));
  }

  private _handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    };
  }
}
