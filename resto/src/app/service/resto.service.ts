import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/restaurants/"
  constructor(private http:HttpClient) { }

  getList(){
    let url = "http://localhost:3000/restaurants"
    console.warn("Some data here")
    return this.http.get(url)
  }

  saveResto(data:any){
    return this.http.post(this.url,data)
  }

  deleteResto(id:any){
    let url = "http://localhost:3000/restaurants/"
    return this.http.delete(url +id)
      
  }

  getCurrentResto(id:any){
    let url = "http://localhost:3000/restaurants/"
      return this.http.get(url+id)
  }
  updateResto(id:any,data:any){
    let url = "http://localhost:3000/restaurants/"
    return this.http.put(url+id,data)
  }
}
