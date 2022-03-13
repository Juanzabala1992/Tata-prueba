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
    nombre: new FormControl(''),
    empleo: new FormControl(''),
  
  });

  constructor(private data:DataService, private shared:SharedService) { }

  ngOnInit(): void {
  }
  save(form){
    this.data.postData(form).subscribe(data=>{
      this.shared.datoPost.emit(data);
    });
  }

  edit(form){
    this.data.putData(form).subscribe(data=>{
        console.log(data);
    });
  }
}
