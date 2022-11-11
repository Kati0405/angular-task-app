import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDescriptionComponent } from './pages/list-description/list-description.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TaskCommentsComponent } from './pages/task-comments/task-comments.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'lists/:listId/edit-task/:taskId', component: TaskViewComponent },
  { path: 'lists/:listId/description', component: ListDescriptionComponent },
  { path: 'lists/:listId/tasks/:taskId/comments', component: TaskCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
