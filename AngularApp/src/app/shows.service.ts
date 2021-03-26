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
  insertShow(newShow: Show): Observable<Show> {
    return this.httpClient.post<Show>('/api/shows', newShow, {
      responseType: 'json',
    });
  }
  updateProject(existingShow: Show): Observable<Show> {
    return this.httpClient.put<Show>('/api/shows', existingShow, {
      responseType: 'json',
    });
  }

  deleteProject(ShowID: number): Observable<string> {
    return this.httpClient.delete<string>('/api/shows?ShowID=' + ShowID);
  }
}
