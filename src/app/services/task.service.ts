import { Injectable } from '@angular/core';
import { delay, Observable, retry, tap } from 'rxjs';
import { Comment } from '../models/comment';
import { List } from '../models/list';
import { Task } from '../models/task';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  lists: List[] = []
  tasks: Task[] = []
  comments: Comment[] = []

  getLists(): Observable<List[]> {
    return this.webReqService.get('lists').pipe(
      tap((lists: List[]) => this.lists = lists)
    )
  }

  getListById(id: string): Observable<List> {
    return this.webReqService.get(`lists/${id}`)
  }

  createList(title: string, description?: string): Observable<List> {
    return this.webReqService.post('lists', { title, description }).pipe(
      tap(list => {
        this.lists.push(list)
      })
    )
  }

  updateList(id: string, title: string): Observable<List> {
    return this.webReqService.patch(`lists/${id}`, { title })
  }

  deleteList(id: string): Observable<List> {
    return this.webReqService.delete(`lists/${id}`)
  }

  getTasks(listId: string): Observable<Task[]> {
    return this.webReqService.get(`lists/${listId}/tasks`)
  }

  getTaskById(listId: string, taskId: string): Observable<Task> {
    return this.webReqService.get(`lists/${listId}/tasks/${taskId}`)
  }

  getTasksByStatus(listId: string, status: string): Observable<Task[]> {
    return this.webReqService.get(`lists/${listId}/tasks?status=${status}`)
  }

  createTask(title: string, listId: string): Observable<any> {
    return this.webReqService.post(`lists/${listId}/tasks`, { title }).pipe(
      tap(task => {
        this.tasks.push(task)
      })
    )
  }

  archiveTask(listId: string, taskId: string, archived: boolean): Observable<Task> {
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { archived })
  }

  updateTask(listId: string, taskId: string, title: string): Observable<Task> {
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title })
  }

  updateTaskStatus(listId: string, taskId: string, status: string): Observable<Task> {
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { status })
  }

  deleteTask(listId: string, taskId: string): Observable<Task> {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  getCommentsToTask(listId: string, taskId: string): Observable<Comment[]> {
    return this.webReqService.get(`lists/${listId}/tasks/${taskId}/comments`).pipe(
      tap(comments => this.comments = comments),
    )
  }

  addCommentToTask(listId: string, taskId: string, message: string,): Observable<Comment> {
    return this.webReqService.post(`lists/${listId}/tasks/${taskId}/comments`, { message }).pipe(
      tap(comment => {
        this.comments.push(comment)
      })
    )
  }

  deleteCommentToTask(listId: string, taskId: string, id: string): Observable<Comment> {
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}/comments/${id}`)
  }

}
