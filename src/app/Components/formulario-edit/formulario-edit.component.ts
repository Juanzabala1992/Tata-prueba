import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.scss']
})
export class FormularioEditComponent implements OnInit {

  
  postForm = new FormGroup({
    identifier:new FormControl(''),
    nombre: new FormControl(''),
    empleo: new FormControl(''),
  
  });

  constructor(private data:DataService, private shared:SharedService) { }

  ngOnInit(): void {
  }

  edit(form){
    this.data.putData(form).subscribe(data=>{
        console.log("Response:", data);
    });
  }

}
