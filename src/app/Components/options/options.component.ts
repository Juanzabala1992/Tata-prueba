import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor() { }
  view:boolean=false;
  view2:boolean=false;
  view3:boolean=false;
  ngOnInit(): void {
  }
  optionSelect(input:string){
    if(input=="save"){
      this.view=true;
      this.view2=false;
      this.view3=false;
    }
    if(input=="edit"){
      this.view=false;
      this.view2=true;
      this.view3=false;
    }
    if(input=="delete"){
      this.view=false;
      this.view2=false;
      this.view3=true;
    }
  }

}
