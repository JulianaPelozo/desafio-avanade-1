import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = { title: '', description: '', isCompleted: false };

  @Output() taskCreated = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  submit(): void {
    if (!this.task.title.trim()) return;

    this.taskService.createTask(this.task).subscribe(() => {
      this.task = { title: '', description: '', isCompleted: false };
      this.taskCreated.emit(); // avisa o task-list para recarregar
    });
  }
}