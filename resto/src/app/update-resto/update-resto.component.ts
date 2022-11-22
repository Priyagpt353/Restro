import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../service/resto.service'

interface editRestro{
      name:any
      email:any
      address:any
}

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean=false
  id:any
  editRestro = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('') 
    }
  )
  constructor(private router:ActivatedRoute, private resto:RestoService) {
    //console.warn(this.router.snapshot.params)
   }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result)=>{
      console.warn("result", result)
      this.editRestro = new FormGroup(
        {
          name: new FormControl(''),
          email: new FormControl(''),
          address: new FormControl('') 
        }
      )
    })
    
  }
  collection(){
    console.warn(this.editRestro.value)
    this.resto.updateResto(this.router.snapshot.params['id'],this.editRestro.value).subscribe((result=>
      console.warn(result)
      ))
      this.alert=true
  }
  closeAlert(){
    this.alert=false
  }

}
