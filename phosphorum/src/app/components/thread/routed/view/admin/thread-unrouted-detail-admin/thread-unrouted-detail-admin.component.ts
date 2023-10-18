import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';


interface IThread {
  id: number;
  title: String;
  user: number;
  replies: number;
}

@Component({
  selector: 'app-thread-unrouted-detail-admin',
  templateUrl: './thread-unrouted-detail-admin.component.html',
  styleUrls: ['./thread-unrouted-detail-admin.component.css']
})
export class ThreadUnroutedDetailAdminComponent implements OnInit {

  @Input() id: number = 1;

  datos: IThread = {id: 0, title: "", user: 0, replies: 0};

  constructor(
    private http: HttpClient
  ) { }

  

  ngOnInit() {
    this.getOne();
  }

  getOne(): void {    
    this.http.get("http://localhost:8083/thread/" + this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.datos = data;
      },
      error: (error: any) => {
        this.id=0;
        console.log(error);
      }

    })

  }

}
