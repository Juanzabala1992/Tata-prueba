import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import {DataService} from 'src/app/services/data/data.service';
import { SharedService } from 'src/app/services/shared/shared.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  postForm = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)]),
    empleo: new FormControl('',[Validators.required, Validators.minLength(3)]),
  
  });
  valid:boolean=false;
  constructor(private data:DataService, private shared:SharedService) { }

  ngOnInit(): void {
  }
  save(form){    
    if(this.postForm.valid){
      this.valid=true;
      this.data.postData(form).subscribe(data=>{
        this.shared.datoPost.emit(data);        
      });
    }
  }
  get nombre(){return this.postForm.get('nombre') }
  get empleo(){return this.postForm.get('empleo') }
}
