import { Component, OnInit, Input } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { CursoModel } from '../model/curso.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any []>;
  afAuth: AngularFireAuth;

  @Input()
  private cursoModel: CursoModel

  constructor(db: AngularFireDatabase, afAuth: AngularFireAuth) { 
    this.afAuth = afAuth;
    this.items = db.list('e-atual');
    this.user = afAuth.authState;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    console.log(this.afAuth.auth.currentUser.displayName);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
