import { Component, OnInit, Input } from '@angular/core';
import { BlogData } from '../app.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input()
  item : BlogData;
  @Input()
  index;

  ngOnInit(): void {
  }

}
