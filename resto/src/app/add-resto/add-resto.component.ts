import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RestoService } from '../service/resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean=false
  addRestro = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('') 
    }
  )

  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }

  collectResto(){
    console.warn(this.addRestro.value)
    this.resto.saveResto(this.addRestro.value).subscribe((result)=>{
      console.warn("result saveed",result)
    })
    this.alert=true
    this.addRestro.reset({})
   
  }

  closeAlert(){
    this.alert=false
  }

}
