export interface Task {
    id: string,
    name: string,
    description: string,
    relatedLink: string,
    assigneeId: string,
    assigneeName: string,
    dueDate: Date,
    completed: Boolean
}