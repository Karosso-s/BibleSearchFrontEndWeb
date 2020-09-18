import { Component, OnInit } from '@angular/core';
import { PixabayImageInterface } from './../pixabay-image-interface';
import { PixabayService } from '../pixabay.service';

@Component({
  selector: 'app-pixabay-images',
  templateUrl: './pixabay-images.component.html',
  styleUrls: ['./pixabay-images.component.css']
})
export class PixabayImagesComponent implements OnInit {

  searchThemes = [
    'All',
    'backgrounds',
    'nature',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'food',
    'sports',
    'music'
  ];

  selectValues = [
    'Todos',
    'Fundo',
    'Natureza',
    'Sentimentos',
    'Saúde',
    'Pessoas',
    'Religiões',
    'Lugares',
    'Animais',
    'Alimentos',
    'Esportes',
    'Musica'
  ];

  searchParams = '';
  searchTheme = 'Todos';
  searchPage = 1;

  searchResults: PixabayImageInterface[];
  searchTotalHits: number;
  searchTotalPages: number;

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.searchImg('ceu');
  }

  pixabayApiCall(theme: string, search: string, page: number){
    this.pixabayService.getImages(theme, search, page)
      .subscribe((results: any) => {
        this.searchResults = results.hits;
        this.lastPage(results.totalHits);
    });
  }

  searchImg(searchText: string){
    const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
    this.searchParams = searchText;
    this.searchPage = 1;
    this.pixabayApiCall(searchTheme, searchText, this.searchPage);
  }

  handleTheme(themeText: string){
    this.searchTheme = themeText;
    const themeParam = this.searchThemes[this.selectValues.indexOf(themeText)];
    this.searchPage = 1;
    this.pixabayApiCall(themeParam, this.searchParams, this.searchPage);
  }

  cleanInput(e){
    e.value = '';
    this.searchParams = '';
  }

  lastPage(totalHits: number){
    this.searchTotalPages = Math.floor(totalHits / 8) + 1;
  }

  previousPage(){
    if (this.searchPage === 1){
    } else{
      this.searchPage -= 1;
      const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
      this.pixabayApiCall(searchTheme, this.searchParams, this.searchPage);
    }
  }

  nextPage(){
    this.searchPage += 1;
    const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
    this.pixabayApiCall(searchTheme, this.searchParams, this.searchPage);
  }

  gotoPage(page: number){
    this.searchPage = page;
    const searchTheme = this.searchThemes[this.selectValues.indexOf(this.searchTheme)];
    this.pixabayApiCall(searchTheme, this.searchParams, this.searchPage);
  }

}
