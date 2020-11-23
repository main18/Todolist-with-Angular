import {Component, Input} from "@angular/core";
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/shared/task.model';

@Component({
    selector:"app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.css"]
})

export class TaskComponent{

    @Input() Task : Task;
    @Input() id: number;

    constructor(private taskService: TasksService){}

    onTaskDone(id:number){
        this.taskService.onTaskDone(id);
    }

    priorityColor(priority: number){
        return this.taskService.getPriorityColor(priority);
    }

}