import { Component } from '@angular/core';

@Component({
  selector: 'app-viewshome',
  templateUrl: './viewshome.component.html',
  styleUrls: ['./viewshome.component.css']
})
export class ViewshomeComponent {

  stat=[
    {value:98,label:'Favourites'},
    {value:885,label:'Views'},
    {value:200,label:'Members'},
  ]

  itli=[
    {img:'/assets/images/couch.png',header:'Couches',content:'This is the best couch , the kind that you would have in your house'},
    {img:'/assets/images/dreeser.png',header:'Dresser',content:'This is the best couch , the kind that you would have in your house'},
    
  ]

}
