import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any = [];
  filteredCharacters: any = [];

  constructor(private service: CharactersService) { }

  async ngOnInit() {
    const characters: any = await this.service.getAll();
    console.log(characters);
    this.characters = characters;
    this.filteredCharacters = characters;
  }

  search: string = '';
  searching(){
    this.filteredCharacters = this.characters.filter((c: any) => 
    c.name.toLowerCase().includes(this.search.toLowerCase()))
  }
}
