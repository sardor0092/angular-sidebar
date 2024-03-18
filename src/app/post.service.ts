import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com/posts/1";



  constructor(private http:HttpClient) { }


  getData():Observable<any>{
    return this.http.get<any>(this.apiUrl)

  }

  createPost(postData:any):Observable<any>{

    return this.http.post<any>(this.apiUrl ,postData)

  }

  updatePost(postId:number , postData:any):Observable<any>{
    const url= `${this.apiUrl}/${postId}`;
    return this.http.put<any>(url , postData);


  }

  deletPost(postId : number):Observable<any> {

    const url= `${this.apiUrl}/${postId}`;

    return this.http.delete<any>(url);




  }









}
