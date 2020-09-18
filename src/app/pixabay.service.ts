import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PixabayImageInterface } from './pixabay-image-interface';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  searchResults: PixabayImageInterface[];
  PIXABAY_URL = 'https://pixabay.com/api/?key=18159412-9426d6b8c5a08bf58c6636ca8&image_type=photo&per_page=8&safesearch=true';
  // pixabayKey = 'key=18159412-9426d6b8c5a08bf58c6636ca8';

  constructor(private httpClient: HttpClient) { }

  getImages(categoryInput: string, searchInput: string, searchPageInput: number): Observable<PixabayImageInterface[]> {
    console.log(categoryInput);
    console.log(searchPageInput);

    let params = new HttpParams();
    params = params.set('category', categoryInput);
    params = params.set('q', searchInput);
    params = params.set('page', searchPageInput.toString());

    console.log(params);

    return this.httpClient.get<PixabayImageInterface[]>(this.PIXABAY_URL, { params })
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
