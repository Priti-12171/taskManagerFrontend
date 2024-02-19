import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService: WebRequestService,  private router: Router ) { }

  createList(title: string){
    console.log(title);
    return this.webRequestService.createApi("/taskLists", {title});
  }

  updateTask(taskListId: string, taskId: string, title: string){
    console.log("this is update task api");
    return this.webRequestService.updateApi("/tasks/"+taskListId+"/"+taskId, {
      name: title
    });
  }

  getList(){
    return this.webRequestService.getApi("/taskLists");
  }

  getAllTask(taskListId: any){
    return this.webRequestService.getApi("/taskLists/"+taskListId);
  }

  createTask(taskListId: any, title: string){
    console.log(title);
    return this.webRequestService.createApi("/tasks/"+taskListId, {title});
  }

  deleteTask(taskListId: any, taskId: any){
    console.log("deleted task via delete metgiod")
     const response = this.webRequestService.delete("/tasks/"+taskListId+"/"+taskId);
     this.router.navigate(["/lists"]);
     return response;
  }
}
