import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent implements OnInit {

  taskList : any;

  tasks : any;
  taskListId: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.taskListId = params['listId'];
        this.taskService.getAllTask(params['listId']).subscribe((tasks: any)=>{
          this.tasks = tasks['response'];
        });
      }
    )

    this.taskService.getList().subscribe((taskList: any)=>{
      this.taskList = taskList;
    });
  }

  createNewList(){
    return this.taskService.createList("dnfdkjnf").subscribe((response: any)=>{
      console.log(response);
    });
  }

  onTaskClick(task: any){

    // this.taskListId = task.taskListId;
    // this.taskService.deleteTask(task.taskListId, task.id).subscribe((response: any)=>{
    //   console.log(this.taskListId)
    //   location.reload();
    //   //this.router.navigate(["/lists", this.taskListId])
    // });
  }

  onDeleteTaskClick(taskId: any){
     
     this.taskService.deleteTask(this.taskListId, taskId).subscribe((response: any)=>{
      console.log("deletedghhghg")
      // location.reload();
      this.router.navigate(["/lists"])
    });

  }

  onDeleteListClick(){

  }
}
