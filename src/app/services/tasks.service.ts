import { Task } from "../shared/task.model";

export class TasksService {
    public tasksList: Task[] = [];/*  = [
        new Task("Cleaning the desk", 1),
        new Task("Working on side projects", 2),
        new Task("Reading atomic habits for 25 minutes", 3)
    ] */

    onAddedTask(task: Task) {
        this.tasksList.push(task);
    }

    onTaskDone(id: number) {
        this.tasksList.splice(id, 1);
    }

    getPriorityColor(priority: number) {
        switch (priority) {
            case 1:
                return "red";
                break;
            case 2:
                return "orange";
                break;
            case 3:
                return "blue";
                break;
            default:
                return "black";
                break;
        }
    }
}