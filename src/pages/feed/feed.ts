import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
	public nome_usuario:String = "Renan Boldrini Codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public function():void{
  	alert("Olha aiiiiiii");
  }

  ionViewDidLoad() {
    //this.function();
  }

}
