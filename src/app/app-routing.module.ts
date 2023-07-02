import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/table', pathMatch:'full'},
  {path:'table', component: CharactersTableComponent},
  {path:'history', component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
