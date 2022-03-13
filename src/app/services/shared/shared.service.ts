import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  @Output() datoCompartido:EventEmitter<any>=new EventEmitter();
  @Output() datoPost:EventEmitter<any>=new EventEmitter();
 
  constructor() { }
}
