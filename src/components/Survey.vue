<template>
<v-app>

  <Nav/>
  <div class="bigPapa">
<div
v-for="(x,idx) in surveys" :key="idx">

<div  class="quizzys" v-if="x.id == id">

  <div v-for="(question, idx) in x.questions" :key="idx">
  <v-card>
    <v-card-title v-text="question.question"> </v-card-title>

     
   

      
   
         <v-radio-group>
                        <div  v-for="(n, idx) in question.choices"
                            :key="n">
                            {{idx}}
                        <v-radio 
                        class="idx"
                            :label="`${n}`" >
                        </v-radio>
                        
                        </div>
                    </v-radio-group>



  </v-card>
  
  </div>
        <router-link class="routerLink" to="/">  <v-btn class='btn'>
       Home
                 </v-btn></router-link> 
  </div>

</div>

      


  </div>
            
</v-app>
</template>

<script>
import { mapState } from 'vuex'
import {fetchSurvey} from '@/api'
import Nav from '@/components/Nav.vue'
export default {
  name: 'Survey',
  components:{
    Nav
},
  data() {
    return {
       survey: [],
       id: this.$route.params.id
    }
  },
  computed: mapState({
    surveys: state => state.surveys
  }),

  beforeMount() {
  this.$store.dispatch('loadSurveys')
     console.log(this.$route.params.id)
  
  
  

  },
    methods: { // new Vue obj member
     handleSubmit() {
     //see if answers are correct here on submit, then show correct answers for questions like in default quiz
    }
  },

}

</script>

<style>
.bigPapa{
  position: absolute;
  margin-top: 50px;
  left: 20%;
  right: 20%;
}
.quizzys{
  position:absolute;
  top:20px;
  left:20%;
  right:20%;

}

.btn{
  position:relative;
  bottom:0px;
  margin: 20px;
}
</style>