import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-provincia-selector',
  templateUrl: './provincia-selector.component.html',
  styleUrls: ['./provincia-selector.component.scss']
})
export class ProvinciaSelectorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.devolverProvincia()
  }

  provincias!: any[]
  provincia:any
  devolverProvincia() {
    this.http.get<any[]>(environment.url__backend+'provincias').subscribe(respuesta => {



      this.provincias=respuesta;

  //  this.provincias=  respuesta
    })
  }


}
