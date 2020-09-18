import { BibleSearchService } from './../bible-search.service';
import { BibleVersesInterface } from './../bible-verses-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bible-search',
  templateUrl: './bible-search.component.html',
  styleUrls: ['./bible-search.component.css']
})
export class BibleSearchComponent implements OnInit {

  bibleVersions = [
    'bible_aa',
    'bible_acf',
    'bible_nvi'
  ];

  bibleBooks = [
    'Gênesis',
    'Êxodo',
    'Levítico',
    'Números',
    'Deuteronômio',
    'Josué',
    'Juízes',
    'Rute',
    '1º Samuel',
    '2º Samuel',
    '1º Reis',
    '2º Reis',
    '1º Crônicas',
    '2º Crônicas',
    'Esdras',
    'Neemias',
    'Ester',
    'Jó',
    'Salmos',
    'Provérbios',
    'Eclesiastes',
    'Cânticos',
    'Isaías',
    'Jeremias',
    'Lamentações de Jeremias',
    'Ezequiel',
    'Daniel',
    'Oséias',
    'Joel',
    'Amós',
    'Obadias',
    'Jonas',
    'Miquéias',
    'Naum',
    'Habacuque',
    'Sofonias',
    'Ageu',
    'Zacarias',
    'Malaquias',
    'Mateus',
    'Marcos',
    'Lucas',
    'João',
    'Atos',
    'Romanos',
    '1ª Coríntios',
    '2ª Coríntios',
    'Gálatas',
    'Efésios',
    'Filipenses',
    'Colossenses',
    '1ª Tessalonicenses',
    '2ª Tessalonicenses',
    '1ª Timóteo',
    '2ª Timóteo',
    'Tito',
    'Filemom',
    'Hebreus',
    'Tiago',
    '1ª Pedro',
    '2ª Pedro',
    '1ª João',
    '2ª João',
    '3ª João',
    'Judas',
    'Apocalipse'
  ];

  searchResults: BibleVersesInterface[];

  searchPage = 1;
  searchTotalPages = 10; // ultima page

  constructor(private bibleSearchService: BibleSearchService) { }

  ngOnInit(): void {
    this.bibleSearchApiCall('bible_acf', 'Gênesis', 1, 1, 5);
  }

  bibleSearchApiCall(version: string, book: string, chapter?: number, verseInitial?: number, verseFinal?: number){
    this.bibleSearchService.versesSearch(version, book, chapter, verseInitial, verseFinal)
    .subscribe((results: any) => {
      // console.log(results);
      this.searchResults = results;
    });
  }

  lastPage(totalHits: number){
    this.searchTotalPages = Math.floor(totalHits / 8) + 1;
  }

  previousPage(){
    if (this.searchPage <= 1){
    } else{
      this.searchPage -= 1;
      // const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
      // this.pixabayApiCall(searchTheme, this.searchParams, this.searchPage);
    }
  }

  nextPage(){
    this.searchPage += 1;
    // const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
    // this.pixabayApiCall(searchTheme, this.searchParams, this.searchPage);
  }

  gotoPage(page: number){
    this.searchPage = page;
    // const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
    // this.pixabayApiCall(searchTheme, this.searchParams, this.searchPage);
  }

}
