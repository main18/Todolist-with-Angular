import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-cockpite',
  templateUrl: './cockpite.component.html',
  styleUrls: ['./cockpite.component.css']
})
export class CockpiteComponent implements OnInit {

  @ViewChild("taskName") taskName : ElementRef;
  @ViewChild("taskPriority") taskPriority : ElementRef;

  constructor(private tasksService : TasksService) { }

  ngOnInit(): void {
  }

  addTask(){
    let taskItem = new Task(this.taskName.nativeElement.value, parseInt(this.taskPriority.nativeElement.value));
    this.tasksService.onAddedTask(taskItem);
    this.taskName.nativeElement.value = "";
    this.taskPriority.nativeElement.value = "";
  }

  onTaskAdd(){
    if(this.taskName.nativeElement.value && this.taskPriority.nativeElement.value){
       this.addTask();
    }
  }

  onPress(event){
    if((event.code === "NumpadEnter" || event.code === "Enter") && (this.taskName.nativeElement.value && this.taskPriority.nativeElement.value)){
      this.addTask();
    }
  }

}
