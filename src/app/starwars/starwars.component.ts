import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "../starwars.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-starwars",
  templateUrl: "./starwars.component.html",
  styleUrls: ["./starwars.component.css"]
})
export class StarwarsComponent implements OnInit {
  createForm: FormGroup;
  // categories: string[] = ["people", "starships", "films"];
  selectedCat: string = "";
  searchTerm: string = "";
  apiReturn = {};

  constructor(private data: StarWarsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      searchTerm: new FormControl(),
      selectedCat: new FormControl()
    });
  }

  handleSubmit = () => {
    // console.log(searchTerm);
    this.data.getStarWars(this.selectedCat, this.searchTerm).subscribe(data => {
      this.apiReturn = data;
      console.log(this.apiReturn);
    });
  };
}
