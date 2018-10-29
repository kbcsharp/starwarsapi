import { Injectable } from "@angular/core";
// import { HttpHeaders, URLSearchParams } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json"
//   })
// };

@Injectable()
// @Injectable({
//   providedIn: "root"
// })
export class StarWarsService {
  constructor(private http: HttpClient) {}

  getStarWars(selectedCat, searchTerm) {
    console.log(selectedCat);
    console.log(searchTerm);
    return this.http.get<any>(
      `https://swapi.co/api/${selectedCat}/?search=${searchTerm}`
      // httpOptions
    );
  }
}
