import { Component } from '@angular/core';
import { ApiService } from "../../core/services/api/api.service";
import { Router } from "@angular/router";
import { Comment } from 'src/core/models/comment.model';

@Component({
  selector: 'app-home-comment',
  templateUrl: './home-comment.component.html',
  styleUrls: ['./home-comment.component.scss']
})
export class HomeCommentComponent {
  constructor(private readonly apiService: ApiService, 
    private router: Router) { }



  comments: Comment[] = [];
  
  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.apiService.getAllEntities(Comment).subscribe((response) => {
      this.comments = response.data;
      console.log(this.comments)
    });
}
}