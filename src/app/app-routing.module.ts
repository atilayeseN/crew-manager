import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { CardPageComponent } from './components/card-page/card-page.component';

const routes: Routes = [  { path: '', component: CrewListComponent },{ path: 'card/:id', component: CardPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
