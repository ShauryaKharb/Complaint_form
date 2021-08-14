import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: 'AIzaSyAVSywJdV2Cb3YIxBUl7png1kzhu-Re2w4',
  authDomain: 'complaint-forum-679ae.firebaseapp.com',
  projectId: 'complaint-forum-679ae',
  storageBucket: 'complaint-forum-679ae.appspot.com',
  messagingSenderId: '21394844215',
  appId: '1:21394844215:web:1e1505394e5fac6af56db2',
}
firebase.initializeApp(firebaseConfig)

export default firebase.firestore()
