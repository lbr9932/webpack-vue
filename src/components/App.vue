<template>
    <h1>{{greeting}} from the AppComponent {{message}}</h1>
</template>
<script>
  module.exports = {
    data : function(){
      return {
        greeting: 'Hello1212121',
        message: '안녕하세요 Vue!'
      }
    }
  }
</script>