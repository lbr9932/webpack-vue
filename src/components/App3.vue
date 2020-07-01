<template>
    <div v-if="Math.random() > 0.5">
      이제 나를 볼 수 있어요
    </div>
    <div v-else>
      이제는 안보입니다
    </div>
</template>
<script>
  module.exports = {
    data : function(){
      return {
        seen: true
      }
    }
  }
</script>