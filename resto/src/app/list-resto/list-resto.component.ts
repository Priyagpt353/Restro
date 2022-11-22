import { Component, OnInit } from '@angular/core';
import { RestoService } from '../service/resto.service'

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  list:any=[]
  constructor(private resto:RestoService) { 
    this.resto.getList().subscribe(data=>console.warn(data))
    this.resto.getList().subscribe(response=>this.list=response)
  }

  ngOnInit(): void {
  }

  deleteResto(item:any){
    this.list.splice(item-1,1)

    this.resto.deleteResto(item).subscribe((result)=>{
      console.warn("item deleted",result)
    })

  }

}
