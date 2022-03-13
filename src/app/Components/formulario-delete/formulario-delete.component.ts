import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder  } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-formulario-delete',
  templateUrl: './formulario-delete.component.html',
  styleUrls: ['./formulario-delete.component.scss']
})
export class FormularioDeleteComponent implements OnInit {

  postForm = new FormGroup({
    identifier:new FormControl('',[Validators.required, Validators.min(1)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    empleo: new FormControl('', [Validators.required, Validators.minLength(3)]), 
  
  });
  valid:boolean=false;
  constructor(private data:DataService, private shared:SharedService) { }

  ngOnInit(): void {
  }

  delete(form){
    if(this.postForm.valid){ 
      this.data.deleteData(form).subscribe(data=>{
        console.log("Response-delete:", data);
    });
  }
}
get identifier(){return this.postForm.get('identifier') }
get nombre(){return this.postForm.get('nombre') }
get empleo(){return this.postForm.get('empleo') }
}
