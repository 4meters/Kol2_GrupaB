import { Component, OnInit } from '@angular/core';
import {MRDataService} from "../../services/mr-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'orders-details-mr',
  templateUrl: './mr-forum-details.component.html',
  styleUrls: ['./mr-forum-details.component.css']
})
export class MRForumDetails implements OnInit {

  public id: string;
  public title: string;
  public text: string;
  public image: string;

  constructor(private service: MRDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.route.paramMap.subscribe(params => {
        id = params.get('id');
        this.getOne(id);
      });
  }

  getOne(id: string) {
    this.service.getById(id).subscribe((res: any) => {
      this.id = res['id'];
      this.title = res['title'];
      this.text = res['text'];
      this.image = res['image'];
    });
  }
}
