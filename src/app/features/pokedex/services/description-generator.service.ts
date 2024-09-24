import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DescriptionGeneratorService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.apiUrl;

  public getPokemonDescription(pokemonName: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { prompt: pokemonName })
  }

}
