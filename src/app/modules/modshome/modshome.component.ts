import { Component } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent {

  isOpenModal=false;
  openModal(){
    this.isOpenModal=!this.isOpenModal;

  }

  acco=[
    {title:'What is a dog?',content:'A dog is a type of domesticated animal     Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'},
    {title:'What kind of dogs are there?',content:'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
    {title:'How do you acquire a dog?',content:'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.'},
  ]

}
