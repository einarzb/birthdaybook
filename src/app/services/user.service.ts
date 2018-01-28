import { Injectable } from '@angular/core';
// AngularFirestoreCollection - fetch all users
// AngularFirestoreDocument - fetch single user
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//everything we return from FiB to component is gonna be observable
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor() { }

}
