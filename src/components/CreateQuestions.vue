<template>
<div>
    <v-app>
      
        <div class="newQuestion">
          <div class = "newQ">
            <v-text-field class="enterQuestion" outlined v-model="question" placeholder="Please enter your question" ></v-text-field>
             <v-text-field class="enterQuestion" outlined v-model="answer" placeholder="Enter the correct answer" ></v-text-field>
          </div>

   

        <h2 class="large" v-show="choices.length > 0">Question Choices</h2>


    <v-card v-for="(choice, idx) in choices" v-bind:key="idx">
      <div class="choices">
        <v-text-field type="text" class="input is-large" v-model="choices[idx]" />
      </div>

      <div class="remove">
        <v-btn class="button is-large" @click.stop="removeChoice(choice)"> Remove this option </v-btn>
      </div>
    </v-card>

        <div class = "addSave">  
            <v-btn class="large" @click="addChoice">Add Option</v-btn>
            <p> One option needs to be the correct answer </p>
            <v-btn class="large" @click="saveQuestion"> Save Question</v-btn>
            <p> Allows you to also add a new question </p>
        </div> 
       </div>
    </v-app>
    </div>
</template>

<script>
export default {
name: 'Create',
data(){
      return {
        question: '',
        answer: '',
        choices: [],
    }
  },
 
 
  methods: {
    removeChoice(choice) {
      const idx = this.choices.findIndex(c => c === choice)
      this.choices.splice(idx, 1)
    },
    saveQuestion() {
      //sends to parent component
      this.$emit('questionComplete', {
        question: this.question,
        answer: this.correctAnswer,
        choices: this.choices.filter(c => !!c)
      })
      this.question = ''
      this.answer = ''
      this.choices = []
    },
    addChoice() {
      this.choices.push('')
    },
  }
    
  }

</script>


<style scoped>

.addSave{
  position: relative;
  bottom:0px;
  margin:20px;
  padding:10px;
  

}
.v-card{
   margin-left: auto;
    margin-right: auto;
    width: 600px;
    padding: 10px 20px;
    margin-top: 20px;   
}
.enterQuestion{
  
  position:relative;
  display: inline;
  
  top: 0px;
}

.v-select{
  margin-top: 25px;
}
.routerLink{
     text-decoration: none;
     margin: 25px;
     
}


.newQuestion{
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    width:  400px;

    height: auto;
    top: 20px;
   
    
}

.newQ{
position: relative;
margin: 5px;

}
</style>