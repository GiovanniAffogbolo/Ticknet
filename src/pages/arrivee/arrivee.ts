import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignupPage } from '../signup/signup';
import { Profile } from './../../models/profile.model';

import { ArretsPage } from '../arrets/arrets';

//import component
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { ModalController, AlertController, } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../profile/profile';


//Providers
import { ListevilleProvider } from '../../providers/listeville/listeville';

/**
 * Generated class for the ArriveePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-arrivee',
  templateUrl: 'arrivee.html',
})
export class ArriveePage implements OnInit{

  public ville: any;
  nbr: Array<number>
  public name: string;
  email: string;
  photoUrl: string;
  uid: string;
  emailVerified: string;
  public user: any;
  public text: string;

  constructor(private storage: Storage, 
    private nativeStorage: NativeStorage, 
    private afAuth: AngularFireAuth, 
    private toastCtrl: ToastController, 
    public alrtCtrl: AlertController,  
    public authData: AuthProvider,  
    public modalCtrl: ModalController, 
    public afDB: AngularFireDatabase,
    public listeVille: ListevilleProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {

  }

    
  ngOnInit() {
    this.ville = this.listeVille.countryList; 
    console.log(this.ville)
  }


  closeModal() {
    this.navCtrl.pop();
  }

}
