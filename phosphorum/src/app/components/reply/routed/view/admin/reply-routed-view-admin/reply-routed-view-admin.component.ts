import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IReply {
  id: number,
  title: String,
  body: String,
  user: number,
  thread: number
}

@Component({
  selector: 'app-reply-routed-view-admin',
  templateUrl: './reply-routed-view-admin.component.html',
  styleUrls: ['./reply-routed-view-admin.component.css']
})
export class ReplyRoutedViewAdminComponent implements OnInit {

  id : number=1;

  constructor( 
    private oActivatedRoute: ActivatedRoute
    ) { 
      this.id = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") || "1");
    }

  ngOnInit() {
  }

}
