import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "list", component:ListComponent, title: "Lista elementów"},
  {path: "exercise", component:ExerciseComponent, title: "Treść zadania"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
