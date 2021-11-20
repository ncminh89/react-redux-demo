import { Task } from "./task.interface";

export interface Phase {
    id: string,
    name: string,
    stage: number,
    numberOfStages: number,
    tasks: Task[] 
}