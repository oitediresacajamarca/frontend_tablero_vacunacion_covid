import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recepcion-anexos',
  templateUrl: './recepcion-anexos.component.html',
  styleUrls: ['./recepcion-anexos.component.scss']
})
export class RecepcionAnexosComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  form!:FormGroup;

  ngOnInit(): void {
    this.form= this.fb.group({
      PROVINCIA:'',
      TIPO_DOCUMENTO:'',
      NUMERO_DOCUMENTO:'',
      TEMPERATUR_MAXIMA:'',
      TEMPERATURA_MINIMA:'',
      OBSERVACIONES:''
    })
  }



}
