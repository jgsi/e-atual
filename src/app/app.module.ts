import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

  import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CursoComponent } from './curso/curso.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBKYPXNjRU2WEB2xTvQK6t2vpyXwtVh-Go",
  authDomain: "e-atual.firebaseapp.com",
  databaseURL: "https://e-atual.firebaseio.com",
  projectId: "e-atual",
  storageBucket: "e-atual.appspot.com",
  messagingSenderId: "459276875130"
}

const appRoutes: Routes = [
   {path: '', component:PrincipalComponent}
  ,{path: 'destaque', component:DestaqueComponent}
  ,{path: 'sobrenos', component:SobrenosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CursoComponent,
    DestaqueComponent,
    PrincipalComponent,
    SobrenosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
