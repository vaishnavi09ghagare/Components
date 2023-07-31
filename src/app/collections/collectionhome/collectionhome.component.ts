import { Component } from '@angular/core';

@Component({
  selector: 'app-collectionhome',
  templateUrl: './collectionhome.component.html',
  styleUrls: ['./collectionhome.component.css']
})
export class CollectionhomeComponent {

  header=[
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ]

  record=[
    {name:'James', age:21,job:'Designer'},
    {name:'Jill', age:25 ,job:'Engineer'},
    {name:'Elyse', age:28 ,job:'Accountant'},
  ]



}
