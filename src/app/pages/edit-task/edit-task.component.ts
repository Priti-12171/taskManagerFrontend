import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent implements OnInit {

  taskListId: any;
  taskId: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router){}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.taskListId = params['taskList'];
        this.taskId = params['taskId'];
      }
    )
    
  }

  updateTask(title: string){
    this.taskService.updateTask(this.taskListId, this.taskId, title).subscribe((response: any)=>{
      console.log(response)
      this.router.navigate(['/lists', this.taskListId]);
    });
    
  }



}
