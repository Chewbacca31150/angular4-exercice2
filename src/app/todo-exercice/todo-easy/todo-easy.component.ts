import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-easy',
  templateUrl: './todo-easy.component.html',
  styleUrls: ['./todo-easy.component.css']
})
export class TodoEasyComponent {

  /**
   * Nous allons faire ici une todo list. Elle fera un ajout, suppression, édition.
   * Si plus d'items, on affichera un message disant qu'il n'y a plus d'items.
   */
  constructor() { }
  /**
   * tasks : un objet avec deux exemples de taches
   */
  tasks: any = [
    { name: 'make an app', edit: false },
    { name: 'show an app', edit: false },
  ];

  /**
   * La valeur de l'input
   */
  taskToAdd = '';

  /**
   * @desc add a task in the list
   */
  addTask(): void {

    /**
     * TODO
     * Créer une tâche SI la valeur de l'input n'est pas vide.
     * Vider l'input après la création.
     */
  }

  /**
   * @desc update a task
   * @param {int} index
   * @param {any} task
   */
  update(index, task) {
    this.tasks[index].name = task.name;
    this.tasks[index].edit = false;
  }

  /**
   * @desc remove a task from the list
   * @param {int} index
   */
  remove(index): void {
    /**
     * TODO
     * Remove a task from the list
     */
  }

  /**
   * @desc change the value of edit (boolean)
   * @param task
   */
  edit(task): void {
    /**
     * TODO
     * Change the value of 'edit' from a task
     */
  }

}
