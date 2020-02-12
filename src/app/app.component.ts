import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogData } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deom1';
  data: BlogData[];

  constructor(private http: HttpClient) {

  }

  OnKeyPress(evt: KeyboardEvent) {
    console.log(evt);
    this.title = '';

  }

  ngOnInit(): void {
    this.http.get<BlogData[]>('http://localhost:4200/api/articles.json').subscribe((value) => {

      this.data = value;

    });


  }


  headerClickLogo(str: string) {
    this.title = str;
  }



}


