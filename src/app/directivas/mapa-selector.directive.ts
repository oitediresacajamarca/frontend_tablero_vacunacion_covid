import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMapaSelector]'
})
export class MapaSelectorDirective {

  constructor(private elementRef:ElementRef,private renderer: Renderer2) { }
  @Input('mapa') mapa: any

  @HostListener('over') mouseClick(eventData: Event) {
  
  
  }

}
