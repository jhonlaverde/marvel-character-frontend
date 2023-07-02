import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from 'src/app/marvel-service.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date'];
  datasource:any[] = [];
  clickedRows = new Set<any>();

  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit() {
    this.marvelService.getHistory().subscribe(
      data => {this.datasource = data}, error => {console.error('Error al obtener el historico de marvel', error)}
    );
  }

}
