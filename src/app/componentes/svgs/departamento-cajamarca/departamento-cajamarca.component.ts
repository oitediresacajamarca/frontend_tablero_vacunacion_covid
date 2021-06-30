import { ElementRef, Renderer2, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-departamento-cajamarca',
  templateUrl: './departamento-cajamarca.component.html',
  styleUrls: ['./departamento-cajamarca.component.scss']
})
export class DepartamentoCajamarcaComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @Output('selecciono_provincia')
  selecciono_provincia = new EventEmitter<string>();

  estado_activo = 'todos'

  ngOnInit(): void {
  }

  provincia(e: string, event: any) {
    let provincias: ElementRef[] =
      this.elementRef.nativeElement.querySelectorAll('.PROVINCIA')
    provincias.forEach(provincia => {
      this.renderer.removeClass(provincia, 'activo')
      this.renderer.addClass(provincia, 'desactivo')




    })


    this.renderer.removeClass(event?.target.parentNode, 'desactivo')
    this.renderer.addClass(event?.target.parentNode, 'activo')

    /*  this.renderer.setAttribute(event.target.parentNode, 'class','activo')*/
    // 

    this.selecciono_provincia.emit(e)
  }



  seleccionar_provincia(provincia: string) {
    console.log(provincia)
    let provincias: ElementRef[] =
      this.elementRef.nativeElement.querySelectorAll('.PROVINCIA')
    if (provincia != 'TODOS' && provincia != '') {
      provincias.forEach(provincia => {

        this.renderer.removeClass(provincia, 'activo')
        this.renderer.addClass(provincia, 'desactivo')
      })



      let provincias_ele = this.elementRef.nativeElement.querySelector('#' + provincia.replace(' ', '_'))



      this.renderer.removeClass(provincias_ele, 'desactivo')
      this.renderer.addClass(provincias_ele, 'activo')

    }
    else {
      provincias.forEach(provincia => {
   
        this.renderer.removeClass(provincia, 'desactivo')
        this.renderer.addClass(provincia, 'activo')
      })
    }

  }



}
