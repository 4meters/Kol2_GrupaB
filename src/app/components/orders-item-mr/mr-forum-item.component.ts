import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'orders-item-mr',
  templateUrl: './mr-forum-item.html',
  styleUrls: ['./mr-forum-item.component.css']
})
export class MRForumItemComponent implements OnInit {
  @Input() id: number;
  @Input() image: string;
  @Input() text: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
