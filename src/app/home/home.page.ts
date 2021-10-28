import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Character } from '../interfaces/interface';
import { MenuController, NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  characters:Character[]=[];
  pirate_crew:string;
  pirate_status:string;
  crews: any;
  character_quote:string;
  character_haki:number;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop: true,
    speed: 2500
  };


  constructor(private data: DataService, private menu: MenuController, private router: Router, public alertController: AlertController, public toastController: ToastController) {}
  
  async loadAllCharacters()
  {
    this.characters = await this.data.fetchCharacters();
  }

  async filterNotify(value) {
    const toast = await this.toastController.create({
      message: `${value}`,
      position: 'bottom',
      color:'tertiary',
      duration: 1729
    });
    toast.present();
  }
  
  async filterCrew(pirate_crew){
    if(pirate_crew == "Beasts Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Straw Hat Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Big Mom Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Baroque Works"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Whitebeard Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Revolutionary Army"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Blackbeard Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Roger Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else if(pirate_crew == "Redhead Pirates"){
      this.characters = await this.data.filterByJollyRoger(pirate_crew)
    }else{
      this.loadAllCharacters();
    }
    this.filterNotify(pirate_crew);
    this.menu.close('first')
  }

  async filterStatus(pirate_status){
    if(pirate_status == "Alive"){
      this.characters = await this.data.filterByStatus(pirate_status)
    }else if (pirate_status == "Deceased"){
      this.characters = await this.data.filterByStatus(pirate_status)
    }else if(pirate_status == "Unknown"){
      this.characters = await this.data.filterByStatus(pirate_status)
    }else{
      this.loadAllCharacters();
    }
    this.menu.close('first')
  }
  
  ngOnInit(crew) {
    this.loadAllCharacters();
    console.log("All Characters loaded succesfully");
  }

  characterDetails(character)
  {
    let navigationExtras: NavigationExtras = {
      state: {
        parametros: character,
      }
    }
    //console.table(character);
    this.router.navigate(['details'], navigationExtras);
  }

  slideMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first')
    console.log("Burger Clicked!");
  }
  

}
