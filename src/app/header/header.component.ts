import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tittle = 'What Is This!?';
  subTittle = 'This is ...';
  fontSize = 15;
  constructor() { }

  ngOnInit(): void {

  }

  // #region 事件

  // 某件事執行
  OnSomeThingDoing(eventName: MouseEvent) {
    try {
      if (eventName.altKey) {
        this.subTittle = 'This is Image';
      } else {
        this.subTittle = 'What Is This!?';
      }

    } catch {


    }

  }

  ChangeSize(evt: WheelEvent) {
    console.log(evt);

    if (evt.deltaY > 0) {
      this.fontSize++;
    } else {
      this.fontSize--;
    }

    evt.preventDefault();


  }

  // #endregion

}
