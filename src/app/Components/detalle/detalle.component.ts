import { Component, OnInit } from '@angular/core';
import { ListaData } from 'src/app/models/lista-data';
import {SharedService} from 'src/app/services/shared/shared.service';
import { ListaDataPost } from '../../models/lista-data-post';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  infoClient:ListaData;
  infoPost:ListaDataPost;
  view=false;
  view2=false;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.datoCompartido.subscribe((data:any)=>{
      this.infoClient=data;
      this.infoPost=data;
      if(this.infoClient.email==null && this.infoPost!=null){        
        this.view2=true;
        this.view=false; 
        console.log("primer if")
      }
     if(this.infoClient.email!=null){
        this.view=true;
        this.view2=false;  
        console.log("segundo if")
      }    
    });

   /* this.shared.datoPost.subscribe((data:any)=>{ 
      this.infoPost=data;
      console.log("this.infoPost", this.infoPost);
      this.view=false;       
      if(this.infoClient!=null){
               
        this.views=true;         
      }      
    });*/
  }

}
