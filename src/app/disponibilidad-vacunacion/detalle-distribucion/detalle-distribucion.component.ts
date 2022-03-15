import { Component, OnInit } from '@angular/core';
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-detalle-distribucion',
  templateUrl: './detalle-distribucion.component.html',
  styleUrls: ['./detalle-distribucion.component.scss']
})
export class DetalleDistribucionComponent implements OnInit {

  constructor() { }
  table!:Tabulator
  tabledata=[]

  ngOnInit(): void {

    this.table = new Tabulator("#example-table", {
      data:this.tabledata,           //load row data from array
      layout:"fitColumns",      //fit columns to width of table
      responsiveLayout:"hide",  //hide columns that dont fit on the table
      tooltips:true,            //show tool tips on cells
      addRowPos:"top",          //when adding a new row, add it to the top of the table
      history:true,   
      clipboard:true,         //allow undo and redo actions on the table
   
      movableColumns:true,      //allow column order to be changed
      resizableRows:true,       //allow row order to be changed
      initialSort:[             //set the initial sort order of the data
          {column:"name", dir:"asc"},
      ],
      columns:[                 //define the table columns
          {title:"AMBITO", field:"ambito",formatter:function(cell:any, formatterParams:any){
            var value = cell.getValue();
          
                 return "<span style=' font-weight:bold;font-size:14px;color:blue'>" + value + "</span>";
          
         }},
          {title:"PRIMERA DOSIS", field:"primera_dosis", hozAlign:"center",formatter:function(cell:any, formatterParams:any){
            var value = cell.getValue();
            if(value !=undefined){
          
                 return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
                }
                 else{
                   value=0

                  return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
          
                 }
          
         }},
          {title:"SEGUNDA DOSIS", field:"segunda_dosis", hozAlign:"center",formatter:function(cell:any, formatterParams:any){
            var value = cell.getValue();
            if(value !=undefined){
          
                 return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
                }
                 else{
                   value=0

                  return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
          
                 }
          
         }}

        
      ]
  });


  }


 
}