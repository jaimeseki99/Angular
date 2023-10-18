import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface IReply {
  id: number,
  title: String,
  body: String,
  user: number,
  thread: number
}

@Component({
  selector: 'app-reply-unrouted-detail-admin',
  templateUrl: './reply-unrouted-detail-admin.component.html',
  styleUrls: ['./reply-unrouted-detail-admin.component.css']
})
export class ReplyUnroutedDetailAdminComponent implements OnInit {

  @Input() id: number = 1;

  datos: IReply = {id: 0, title: "", body: "", user: 0, thread: 0};

  idNotExist: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne(): void {    
    this.http.get("http://localhost:8083/reply/" + this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.datos = data;
        this.idNotExist = false;
      },
      error: (error: any) => {
        this.datos = {id: 0, title: "", body: "", user: 0, thread: 0};
        console.log(error);
        this.idNotExist = true;
      }

    })

  }

}
