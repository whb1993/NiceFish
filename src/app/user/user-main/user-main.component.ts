import { Component, OnInit, EventEmitter} from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss'],
  animations: [
    flyIn
  ]
})
export class UserMainComponent implements OnInit {
  eventEmitterDemo: EventEmitter<string>;

  constructor() {
    // 观察者模式
    let ee = new EventEmitter();
    ee.subscribe((name:string)=>console.log(`hellow ${name}`));
    ee.emit('whb');

    this.eventEmitterDemo = new EventEmitter<string>();
    this.eventEmitterDemo.emit('ceshi');
    console.log(    this.eventEmitterDemo);
  }

  ngOnInit() {
  }

  onActivate(component) {
    console.log('组件加载完成>'+component);
  }

  onDeactivate(component) {
    console.log('组件已经移除>'+component);
  }

  doFollow(){
    alert('自己不能关注自己！');
  }
}
