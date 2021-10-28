import { Injectable } from '@angular/core';
import { Character } from '../interfaces/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  characters:Character[]=[]; 
  name:string;
  status:string;
  crew:string;
  quote:string;
  haki_id:number;

  constructor(private http: HttpClient) { }


  async fetchCharacters(){
    this.characters = [];
    const respuesta = await fetch('http://gagandeep.alwaysdata.net/onepiece/characters');
    this.characters = await respuesta.json();
    return this.characters;
  }


  async filterByJollyRoger(crew)
  {
    this.characters = [];
    const pirateCrew = await fetch(`http://gagandeep.alwaysdata.net/onepiece/characters?crew=${crew}`);
    this.characters = await pirateCrew.json();
    return this.characters;
  }

  async filterByStatus(status)
  {
    this.characters = [];
    const characterByStatus = await fetch(`http://gagandeep.alwaysdata.net/onepiece/characters?status=${status}`);
    this.characters = await characterByStatus.json();
    return this.characters;
  } 

}
