
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostsProvider } from './../../providers/posts/posts';
import { AddPostPage } from '../add-post/add-post';
import { ViewPostPage } from '../view-post/view-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public postsService: PostsProvider) {
    
  }

  ionViewDidLoad() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  viewPost(post) {
    this.navCtrl.push(ViewPostPage, {
      post: post
    })
  }

  pushAddPostPage(){
    this.navCtrl.push(AddPostPage);
}

  // createTodo() {
  //   let prompt = this.alertCtrl.create({
  //     title: 'Add',
  //     message: 'What do you need to do?',
  //     inputs: [
  //       {
  //         name: 'title'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel'
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           this.todoService.createTodo({title:data.title});
  //         }
  //       }
  //     ]
  //   });

  //   prompt.present();
  // }

  // updateTodo(todo) {
  //   let prompt = this.alertCtrl.create({
  //     title: 'Edit',
  //     message: 'Change your mind?',
  //     inputs: [
  //       {
  //         name: 'title'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel'
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           this.todoService.updateTodo({
  //             _id: todo._id,
  //             _rev: todo._rev,
  //             title: data.title
  //           });
  //         }
  //       }
  //     ]
  //   });

  //   prompt.present();
  // }

  // deleteTodo(todo) {
  //   this.todoService.deleteTodo(todo);
  // }
}
