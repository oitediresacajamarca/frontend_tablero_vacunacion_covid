import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casos-problemas-digitacion',
  templateUrl: './casos-problemas-digitacion.component.html',
  styleUrls: ['./casos-problemas-digitacion.component.scss']
})
export class CasosProblemasDigitacionComponent implements OnInit {

  constructor() { }
  display: any = false
  DOSIS:any=[{nombre:'1ra Dosis'},{nombre:'2da Dosis'},{nombre:'3ra Dosis'}]

  ngOnInit(): void {
  }

  hideDialog(){
    this.display=false
  }
  Guardar(){
    this.display=true
  }

}
