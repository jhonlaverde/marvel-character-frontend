import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MarvelServiceService } from 'src/app/marvel-service.service';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css'],
})
export class CharactersTableComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name'];
  characters:any[] = [];
  clickedRows = new Set<any>();

  constructor(private marvelService: MarvelServiceService) {
   }

  ngOnInit() {
    this.marvelService.getCharacters().subscribe(
      data => {this.characters = data}, error => {console.error('Error al obtener los personajes de marvel', error)}
    );
  }

  openDialog = (row:any) => {
      console.log("selecciono");
  }

}
