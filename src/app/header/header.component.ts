import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input()
  subTittle = 'This is ...';

  // 宣告事件給父元件註冊
  @Output()
  logoClick = new EventEmitter<string>();

  tittle = 'What Is This!?';
  fontSize = 15;
  constructor() { }

  ngOnInit(): void {

  }

  // #region 事件

  // 某件事執行
  onSomeThingDoing(eventName: MouseEvent) {
    try {
      if (eventName.altKey) {
        this.subTittle = 'This is Image';
      } else {
        this.subTittle = 'What Is This!?';
      }
      this.logoClick.emit(this.tittle);
    } catch {


    }

  }

  changeSize(evt: WheelEvent) {
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
