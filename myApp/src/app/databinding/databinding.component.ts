import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  username:string=''
  isDisable:boolean=false
  userName:string=''
  isEnable:boolean=false
  currentCustomer:boolean=true
  fruits:Array<string>=['apple','orange','pomegranate','grapes']


  constructor() { }

  ngOnInit(): void {
    
  }
  userData(event:any){
    console.log('sfsgfdg',event.target.value);
    
  }
  disableBtn(){
    this.isDisable=true

  }
  enable(){
    this.isEnable=true
  }

  

}
