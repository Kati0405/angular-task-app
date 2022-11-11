import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewListComponent } from './components/new-list/new-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './services/web-req.interceptor';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './components/edit-list/edit-list.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe'
import { SortPipe } from './pipes/sort.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListComponent } from './components/list/list.component';
import { SortingPanelComponent } from './features/sorting-panel/sorting-panel.component';
import { ActionPanelComponent } from './features/action-panel/action-panel.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './components/base/base/base.component';
import { TasksColumnComponent } from './components/tasks-column/tasks-column.component';
import { FocusDirective } from './directives/focus.directive';
import { ChangeColorComponent } from './features/change-color/change-color.component';
import { ListDescriptionComponent } from './pages/list-description/list-description.component';
import { TaskCommentsComponent } from './pages/task-comments/task-comments.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditListComponent,
    EditTaskComponent,
    FilterPipe,
    SortPipe,
    ModalComponent,
    TopBarComponent,
    ListsComponent,
    ListComponent,
    SortingPanelComponent,
    ActionPanelComponent,
    TasksComponent,
    TaskComponent,
    BaseComponent,
    TasksColumnComponent,
    FocusDirective,
    ChangeColorComponent,
    ListDescriptionComponent,
    TaskCommentsComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {

  }
}
