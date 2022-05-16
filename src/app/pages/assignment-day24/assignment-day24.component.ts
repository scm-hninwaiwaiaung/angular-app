import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { Post } from '../../interfaces/interface';

@Component({
  selector: 'app-assignment-day24',
  templateUrl: './assignment-day24.component.html',
  styleUrls: ['./assignment-day24.component.scss']
})
export class AssignmentDay24Component implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'action'];
  postList = [];
  constructor(
    private apiSvc: ApiService
  ) { }

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    this.apiSvc.getAllPost().subscribe({
      next: data => {
        this.postList = data;
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    });
  }

  // old version example.
  getPostDataV2() {
    this.apiSvc.getAllPost()
      .subscribe((data) => {
        console.log('=== data ===')
        console.log(data)
      }, error => {
        console.log('=== handle http ====')
        console.log(error)
      });
  }

  deletePostData(id: number) {
    this.apiSvc.deletePost(id).subscribe({
      next: retData => {
        this.getPostData();
      },
      error: err => {
        console.log('=== handle error ====')
        console.log(err)
      }
    })
  }

  editPostData(id: number) {
    console.log('==== post data ====')
    console.log(id)
  }
}
