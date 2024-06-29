import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialCreateComponent } from './tutorial-create/tutorial-create.component';
import { TutorialUpdateComponent } from './tutorial-update/TutorialUpdateComponent';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'create', component: TutorialCreateComponent },
  { path: 'update/:id', component: TutorialUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }