import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MRDataService} from "../../services/mr-data.service";

@Component({
  selector: 'orders-mr',
  templateUrl: './mr-forum.component.html',
  styleUrls: ['./mr-forum.component.css']
})
export class MRForumComponent implements OnInit {

  public items$: any;

  constructor(private service:MRDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response =>{
      this.items$ = response;
    })
  }

}
