import { Component, OnInit, ViewChild } from '@angular/core';
import { DistribucionEstrategiaRedService } from 'src/app/servicios/distribucion-estrategia-red.service';
import { DistribucionEstrategiaRedComponent } from '../distribucion-estrategia-red/distribucion-estrategia-red.component';

@Component({
  selector: 'app-detalle-distribucion-estrategia-red',
  templateUrl: './detalle-distribucion-estrategia-red.component.html',
  styleUrls: ['./detalle-distribucion-estrategia-red.component.scss']
})
export class DetalleDistribucionEstrategiaRedComponent implements OnInit {

  constructor(private distribuciones: DistribucionEstrategiaRedService) { }

  @ViewChild('nuevo_envio') nuevo!: DistribucionEstrategiaRedComponent

  distribuciones_listado: any[] = []

  filtro: any = { red: '1', fabricante: '1' }

  ngOnInit(): void {
    this.cargarDistribuciones()
  }

  open_nuevo() {
    this.nuevo.open()

  }

  selecciono_provincia(e: any) {

    this.filtro.red = e.ID_PROVINCIA
    this.cargar_distribuciones_filtro()

  }

  cargar_distribuciones_filtro() {
    this.distribuciones.listar_filtrados(this.filtro).subscribe((data) => {
      this.distribuciones_listado = data;

    })
  }

  cargarDistribuciones() {
    this.distribuciones.listar().subscribe((data) => {
      this.distribuciones_listado = data;

    })
  }

  creo_nuevo() {

    this.cargarDistribuciones()
  }

  eliminar(id: any) {

    this.distribuciones.eliminar(id).subscribe(data => {
      this.cargarDistribuciones()

    });
  }

  selecciono_fabricante(e: any) {


    this.filtro.fabricante = e;
    this.cargar_distribuciones_filtro()
  }
  restablecer_filtro(){
    this.filtro={ red: '1', fabricante: '1' }
    this.cargarDistribuciones()
  }

}
