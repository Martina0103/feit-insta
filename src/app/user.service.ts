import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment, IUser } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = "/assets/data/objavi.json";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  getComments(postId: number): Observable<IComment[]>{
    return this.http.get<IComment[]>(`/assets/data/objavi.json/${postId}/postComments`);
  }

  postComment(postId: number, comment: IComment){
    return this.http.post(`/assets/data/objavi.json/${postId}/postComments`, comment);
  }
}
