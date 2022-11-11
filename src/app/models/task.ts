export class Task {
    _id: string
    _listId: string
    title: string
    archived: boolean
    createdDate: number = Date.now()
    status: String
}