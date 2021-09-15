import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-distribucion-almacen-red',
  templateUrl: './distribucion-almacen-red.component.html',
  styleUrls: ['./distribucion-almacen-red.component.scss']
})
export class DistribucionAlmacenRedComponent implements OnInit {

  constructor(private fb: FormBuilder,private confirmation:ConfirmationService) { }
  almacenes: any[] = []
  almacen: any

  TIPOS_DOCUMENTOS: any[] = []
  display: boolean = false

  form!: FormGroup;

  ngOnInit(): void {

    

    this.almacenes = [
      { name: 'ALMACEN ESPECIEALISADO JAEN', code: 'ALMACEN ESPECIEALISADO JAEN' },
      { name: 'ALMACEN ESPECIEALISADO CAJAMARCA', code: 'ALMACEN ESPECIEALISADO CAJAMARCA' },
    ];

    this.TIPOS_DOCUMENTOS = [
      { name: 'PECOSA', code: 'PECOSA' },
      { name: 'GUIA DE REMISION', code: 'GUIA DE REMISION' },
    ];

    this.form = this.fb.group({
      almacen: '',
      provincia:'',
      fabricante:'',
      FECHA_DISTRIBUCION:'',
      CANTIDAD_DOSIS:'',
      CANTIDAD_VIALES:'',
      FECHA_VENCIMIENTO:'',
      FECHA_DESCONGELAMIENTO:'',
      TIPO_DOCUMENTO:'',
      NUMERO_DOCUMENTO:''


    })




  }

  open() {

    this.display = true;
  }
  close() {

    this.display = false;
  }

  guardar(){


    this.confirmation.confirm({
      message: 'Estaa seguro de Guardar los datos?',
      accept: () => {
 
      }
    });

    console.log(this.form.value)
  }

}
