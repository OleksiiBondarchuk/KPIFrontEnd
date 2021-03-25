import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './show';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  constructor(private httpClient: HttpClient) {}

  getAllShows(): Observable<Show[]> {
    return this.httpClient.get<Show[]>('/api/shows');
  }
}
