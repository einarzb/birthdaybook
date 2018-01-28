import { Injectable } from '@angular/core';
// AngularFirestoreCollection - fetch all users
// AngularFirestoreDocument - fetch single user
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//everything we return from FiB to component is gonna be observable
import { Observable } from 'rxjs/Observable';

import { User } from '../models/User';
import { access } from 'fs';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor( private afs: AngularFirestore) { 
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('birthday', 'asc'));
  }

  getUsers(): Observable<user[]> {
    // get users with id
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.users;
  }
}
