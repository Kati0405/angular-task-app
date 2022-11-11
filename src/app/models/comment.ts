export class Comment {
    _id: string
    _taskId: string
    message: string
    createdDate: number = Date.now()
    author: string
}