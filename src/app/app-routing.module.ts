import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MRForumComponent} from "./components/orders-mr/mr-forum.component";
import {MRForumDetails} from "./components/orders-details-mr/mr-forum-details.component";

const routes: Routes = [
	{path: '',
  component: MRForumComponent},
	{path: 'posts/:id',
	component: MRForumDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
