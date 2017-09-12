<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
export default {
  name: 'auth',
  mounted () {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth())
    this.ui.start('#firebaseui-auth-container', uiConfig)
    console.log(this.ui)
    },
    destroyed () {
      this.ui.delete()
    }
    
}
</script>