import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

/**
 * Generated class for the AddPostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {

  post: any = {
    _id: null,
    author: 'Leslie Dupin',
    content: '',
    datePublished: '',
    dateUpdated: '',
    title: '',
    type: 'post'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public postService: PostsProvider) {
  }

  ionViewDidLoad() {
  }

  save() {
    this.post._id = this.post.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    this.post.datePublished = new Date().toISOString();
    this.post.dateUpdated = new Date().toISOString();

    this.postService.addPost(this.post);

    this.navCtrl.pop();
  }

}
