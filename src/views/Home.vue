<template>
  <UserCreate />
  <UserList />
  <img src="notacat.jpg" width="200" height="200" alt="Точно не кот">
</template>

<script>
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: { UserCreate, UserList }
}
</script>

<style scoped>

img{
  margin-top: 50px;
}
img:hover{
  transform: scale(1.5);
}

</style>