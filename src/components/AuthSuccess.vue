<template> 
  <div> 
    <h1>Signup succeeded</h1> 
    <button @click='logOut'>Log out</button> 
    <hr> 
    <img :src="photo" style="height: 120px"> <br> 
    <p>{{name}}</p> 
    <p>{{email}}</p> 
    <hr> 
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
        name: '',
        email: '',
        photo: '',
        userId: ''
    }
  },
  created () {
  this.user = firebase.auth().currentUser
  console.log(this.user)
  if (this.user) {
    this.name = this.user.displayName
    this.email = this.user.email
    this.photo = this.user.photoURL
    this.userId = this.user.uid
  }
}
}
</script>
