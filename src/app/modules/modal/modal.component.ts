import { Component, ElementRef, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close=new EventEmitter;

  constructor(private el:ElementRef){
    console.log(this.el.nativeElement)
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onCloseClick():void{
    this.close.emit;
  }

}
