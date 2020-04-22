  <template>
  <v-app>
      <Nav/>
  <div style = "margin:0px;">
      <div class = "create">
        <div v-if="this.review== false">
      <!--   <div>
                    <h1>{{name}}</h1>
        </div> -->
      
          <v-card class = "nameQuiz">
            <h2> Name your Quiz </h2>
             <v-text-field  outlined v-model="name" id = "name" placeholder="Survey Name" class="mx-auto" ></v-text-field>
          </v-card>

              <!-- <v-card class = "v-card">
            <h2>  Give Quiz ID </h2>
             <v-text-field  outlined v-model="id" id = "id" placeholder="Survey Name" class="mx-auto" ></v-text-field>
          </v-card> -->

            
        <div
        v-if="this.name!=''  && this.review == false">
       
        <v-card>
          <CreateQuestions v-on:questionComplete="appendQuestion"/>
        </v-card>

          <v-btn class = "reviewQuiz" @click="reviewQuiz">
          Review Your quiz (please save quiz first!)
        </v-btn>
        </div>
        </div>

      

      <div
       v-if="this.review== true">
       

        <v-card v-for="(x,idx) in questions" :key="idx" >
         {{x}}
        </v-card>
        <v-btn  class = "submitQuiz" @click="submitQuiz">
          Submit Quiz
        </v-btn>
        </div>
        

   





             
      </div>
  </div>

       

    
    
   
    </v-app>
</template>

<script>
import Nav from '@/components/Nav.vue'
import CreateQuestions from '@/components/CreateQuestions.vue'

export default {
name: 'Create',

components:{
    Nav,
    CreateQuestions
},
data(){
      return {
      name: '',
      id: '',
     questions: [],
     review: false,
    }
  },
 
 
  methods: {
   appendQuestion(newQuestion) {
      this.questions.push(newQuestion)
    },
    reviewQuiz(){
       this.review = true
    },
    submitQuiz() {
    this.$store.dispatch('submitNewSurvey', {
      name: this.name,
      id: this.name,
      questions: this.questions
    }).then(() => this.$router.push('/'))
  }

}
}
</script>


<style scoped>
.create{
  position:absolute;
  
  top: 100px;
  left:20%;
  right: 20%;
}
.v-card{
   margin-left: auto;
    margin-right: auto;
    width: 450px;
    padding: 10px 20px;
    margin-top: 20px;
    
}

.v-select{
  margin-top: 25px;
}
.routerLink{
     text-decoration: none;
     margin: 25px;
     
}
.reviewQuiz{
  margin-top:30px;
  margin-bottom:10px;

}
.nameQuiz{
  position: relative;
 

}

.submitQuiz{
margin-top:30px;

}

</style>