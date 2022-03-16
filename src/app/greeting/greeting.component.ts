import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { retry } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }
public name="";
public colors=["red","yellow","blue","green","violet"];
@Input('parentData') public name2;
@Output() public childevent = new EventEmitter();

firevent(){
  this.childevent.emit("Hello Mr.Adarsh Verma");
}


  

}
