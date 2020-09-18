import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BibleVersesInterface } from './bible-verses-interface';

@Injectable({
  providedIn: 'root'
})
export class BibleSearchService {

  searchResults: BibleVersesInterface[];

  readonly SEARCH_URL = 'http://localhost:50960/api/Search';
  readonly ELASTIC_SEARCH_URL = 'https://localhost:44342/api/ESearch';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: max-line-length
  versesSearch(version: string, book: string, chapter?: number, verseInitial?: number, verseFinal?: number): Observable<BibleVersesInterface[]> {

    let params = new HttpParams();
    params = params.set('version', version);
    params = params.set('book', book);
    if (chapter) {params = params.append('chapter', chapter.toString()); }
    if (verseInitial) {params = params.append('verseInitial', verseInitial.toString()); }
    if (verseFinal) {params = params.append('verseFinal', verseFinal.toString()); }

    // console.log(params);

    return this.httpClient.get<BibleVersesInterface[]>(this.SEARCH_URL, { params })
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  versesElasticSearch(version: string, searchParams: string): Observable<BibleVersesInterface[]> {

    let params = new HttpParams();
    params = params.set('version', version);
    params = params.set('searchParams', searchParams);

    // console.log(params);

    return this.httpClient.get<BibleVersesInterface[]>(this.ELASTIC_SEARCH_URL, { params })
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
