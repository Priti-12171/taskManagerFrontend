import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent implements OnInit {

  taskListId: any

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
       this.taskListId = params['taskListId'];

      }
    )
  }
 
  createTask(title: string){
   return this.taskService.createTask(this.taskListId, title).subscribe((response: any)=>{
     console.log(response);
     this.router.navigate(["/lists", this.taskListId])
   });
  }
}
