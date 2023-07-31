import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  @Input() accordian:any[]=[];

  openIndex:number=0;
  onClick(index:number){
    this.openIndex=index
  }

isExpand=true;
  tooglecontent(){
    this.isExpand=!this.isExpand;
  }


}
