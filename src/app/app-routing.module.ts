import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StarwarsComponent } from "./starwars/starwars.component";

const routes: Routes = [{ path: "", component: StarwarsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
