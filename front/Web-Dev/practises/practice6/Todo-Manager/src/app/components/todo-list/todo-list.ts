import { ToDo } from './../../models/todo.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../services/todo.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit, OnDestroy {
  private allTodos: ToDo[] = [];

  filteredTodos: ToDo[] = [];

  private statusFilter: string = '';


  private sub: Subscription | null = null;

  constructor(
    private svc: ToDoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.svc.getTodos().subscribe(todos => {
      this.allTodos = todos.slice(0, 30);
      this.applyFilter();
    });

    this.sub = this.route.queryParams.subscribe(params => {
      this.statusFilter = params['status'] || '';
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }




  private applyFilter(): void {
    if (this.statusFilter === 'completed') {
      this.filteredTodos = this.allTodos.filter(t => t.completed);
    } else if (this.statusFilter === 'pending') {
      this.filteredTodos = this.allTodos.filter(t => !t.completed);
    } else {
      this.filteredTodos = [...this.allTodos];
    }


  }
}
