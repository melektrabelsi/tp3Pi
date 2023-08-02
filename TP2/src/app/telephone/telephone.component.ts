import { Component } from '@angular/core';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent {
  telephone ={
    marque:"Samsung",
    modele:"A51",
    photo:"assets/tel.jpg",
    prix:1150
    };
  basdegamme(){
    if(this.telephone.prix<700)
    return true;
    else 
    return false;
  }
  onDetails(){
    alert("telephone"+ this.telephone.marque + "au prix de" + this.telephone.prix );
  }
}
