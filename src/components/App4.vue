<template>
  <ol>
    <li v-for="todo in todos" :key="todo.seq">
      {{todo.seq}} {{ todo.text }}
    </li>
  </ol>
</template>
<script>
  module.exports = {
    data : function(){
      return {
       todos: [
          { seq: 1, text: 'JavaScript 배우기' },
          { seq: 2, text: 'Vue 배우기' },
          { seq: 3, text: '무언가 멋진 것을 만들기' },
          { seq: 4, text: '무언가 멋진 것을 만들기111' },
          { seq: 5, text: '무언가 멋진 것을 만들기222' }
        ]
      }
    }
  }
</script>