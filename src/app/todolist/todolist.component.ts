import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import {Task} from "../shared/task.model";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [TasksService]
})
export class TodolistComponent implements OnInit {

  tasksList : Task[] = [];

  constructor(private taskService : TasksService) { }

  ngOnInit(): void {
    this.tasksList = this.taskService.tasksList;
  }

}
