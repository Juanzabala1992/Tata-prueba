import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-formulario-delete',
  templateUrl: './formulario-delete.component.html',
  styleUrls: ['./formulario-delete.component.scss']
})
export class FormularioDeleteComponent implements OnInit {

  postForm = new FormGroup({
    identifier:new FormControl(''),
    nombre: new FormControl(''),
    empleo: new FormControl(''),
  
  });

  constructor(private data:DataService, private shared:SharedService) { }

  ngOnInit(): void {
  }

  delete(form){
    this.data.deleteData(form).subscribe(data=>{
        console.log("Response-delete:", data);
    });
  }
}
