import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenerdor-tablero',
  templateUrl: './contenerdor-tablero.component.html',
  styleUrls: ['./contenerdor-tablero.component.scss']
})
export class ContenerdorTableroComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    console.log(this.route.snapshot.children[0].routeConfig?.path=='cobertura')
    if(this.route.snapshot.children[0].routeConfig?.path=='cobertura'){
    
this.active[0]=''
this.active[1]='active'

    }
    else{
      this.active[0]='active'
this.active[1]=''


    }


  }

  active:string[]=['active','']

}
