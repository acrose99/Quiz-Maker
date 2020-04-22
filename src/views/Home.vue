<template>
<v-app>
    <div class="home">
        
       <h1> Welcome to the quiz app! </h1>
        <a onclick="changeImage()" ><img id="logo" @onclick="changeImage" src="@/assets/mushy.png"> </a>

    
      <router-link class="routerLink" to="/create-quiz">
      <v-btn x-large color="#cf2d2d"
      class="ma-2 white--text">
          Create a new Quiz
      </v-btn>
      </router-link>
 
      <router-link class="routerLink" to="/default-quiz">
       <v-btn x-large color="#cf2d2d" 
       class="ma-2 white--text">

       
          Use Quiz Template
      </v-btn>
      </router-link>


         <v-card class = "recent">
      
             <h5 class = "recentTitle"> View recent quizzes </h5>
             <div v-for="survey in surveys" v-bind:key="survey.id">


                 <router-link :to="`surveys/${survey.id}`" class="card-footer-item">
                 <v-btn class="recentbtn" color="#cf2d2d">
         {{ survey.name}}
                 </v-btn>

                 </router-link>

             </div>
         </v-card>
   
    <router-view/>
    </div>
</v-app>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'home',
    computed: mapState({
    surveys: state => state.surveys
  }),
    data() {
        return {
        image1: '@/assets/mushy.png',
        image2: '@/assets/mushroom.png'
      }
    },
    beforeMount(){
      
      this.$store.dispatch('loadSurveys')
      
    },
    methods: {
        changeImage() {
            this.image1 = this.image2
        }
    }
}
</script>

<style scoped>
.routerLink{
     text-decoration: none;
     margin: 25px;
     
}

.recent{
    position: relative;
    bottom: 0px;
    margin-top: 20px;
    
    
    
}
.recentbtn{
    position: relative;
   margin: 20px;
    padding:20px;
    color: white;

}

.recentTitle{
    font-style: italic;
    font-size: 20px;
}
v-btn{
     text-decoration: none;
    
}
img{
    margin-bottom: 125px;
}

card-footer-item{
   background-color: darkgreen;

}
</style>