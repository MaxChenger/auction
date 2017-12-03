import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

	/* 
		把rating即星级设置为输入属性，表示将父组件中的rating属性传递到子组件中
		app-stars选择器出现在product的html中，即它的父组件是product.component.ts
	*/
	@Input() private rating: number=0;
	
	private stars : boolean[];
  constructor() { }

  ngOnInit() {
  	/* 
  		不把stars写死，通过遍历来获得stars的布尔值，比如rating为4时，
  		1>4位false，2>4为false，3>4为false,4>4为false，5>4为true
  		所以stars[false,false,false,false,true]，即有4颗实心的星星
  	*/
  	this.stars= [];
  	for(let i=1;i<=5;i++){
  		this.stars.push(i > this.rating);
  	}
  	//this.stars = [false,false,true,true,true];这里是直接写死的stars，false时表示星星为实心
  }

}
