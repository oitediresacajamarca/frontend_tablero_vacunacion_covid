import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbtack, faHashtag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {

  constructor() { }

  faThumbsUp = faThumbsUp;
  faThumbtack = faThumbtack;
  faHashtag = faHashtag;

  ngOnInit(): void {
  }

}
