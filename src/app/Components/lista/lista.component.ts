import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ListaData} from 'src/app/models/lista-data';
import { ListaDataPost } from 'src/app/models/lista-data-post';
import {DataService} from 'src/app/services/data/data.service';
import {SharedService} from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  information:ListaData[]=[];
  informationPost:ListaDataPost[]=[];
  page:number;
  view:boolean=false;
  paginationinfo:Array<Number>=[];

  constructor(private data:DataService, private shared:SharedService) { }

  ngOnInit(): void {
      this.pagination(1);
  }
   detailData(info){
    this.shared.datoCompartido.emit(info);
  }
  pagination(page:number){
      this.page=page;
      this.view=false;
    if(page==3){
      this.view=true;
     }

    this.shared.datoPost.subscribe((data:any)=>{       
        this.informationPost.push(data);
        let calc:number = (this.informationPost.length)%4;
        if(calc == 1){
          this.paginationinfo.push(this.paginationinfo.length+3);
          this.view=true;
        }            
    });

    this.data.getAllData(this.page).subscribe((res:any)=>{
      let dataInit = res.data      
      for (let i=0;i<(dataInit.length-2);i++){
        this.information[i]=dataInit[i];
      }
    });
  }
}
