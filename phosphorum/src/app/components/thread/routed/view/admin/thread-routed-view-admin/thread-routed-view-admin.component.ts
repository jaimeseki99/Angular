import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IThread {
  id: number;
  title: String;
  user: number;
  replies: number
}

@Component({
  selector: 'app-thread-routed-view-admin',
  templateUrl: './thread-routed-view-admin.component.html',
  styleUrls: ['./thread-routed-view-admin.component.css']
})
export class ThreadRoutedViewAdminComponent implements OnInit {

  id : number=1;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") || "1");
  }

  ngOnInit() {
  }

  
  
  }
 

  

