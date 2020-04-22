<template>
  <div class="default">
  <Nav/>
  <div class = "quiz">
    <Question class="question"/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Default',
  components: {
  Question,
  Nav
  },
methods: {
   
}
}
</script>

<style scoped>


.quiz{
  position: absolute;
  width:800px;
  top: 50px;


}


</style>
