import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Character } from '../interfaces/interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
})
export class DetailsPage implements OnInit {

  characters:Character[]=[];
  name:string;

  
  characterInformation : any;
  constructor(public router: Router, private activatedRoute: ActivatedRoute, public data: DataService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.characterInformation = this.router.getCurrentNavigation().extras.state.parametros;
      }
    });
  
   }
  
  ngOnInit() {
    this.verifyDevilFruit()
  }

  verifyDevilFruit(){
    if(this.characterInformation.devil_fruit == null || this.characterInformation.devil_fruit == undefined){
      this.characterInformation.devil_fruit = 'None'
    }else{
      this.characterInformation.devil_fruit
    }
  }

}
