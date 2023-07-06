<template>
  <div>
    <h1>Редактирование пользователя</h1>
    <form @submit.prevent="update">
      <div>
        <label>Имя</label>
        <input v-model="form.name" required />
      </div>

      <div>
        <label>Email</label>
        <input
          v-model="form.email"
          type="email"
          required
        />
      </div>

      <button type="submit">
        Обновить
      </button>
      <button type="button" @click="goHome()">
        Отмена
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)

    const form = reactive({ name: '', email: '' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      console.log(user, userId.value)
      form.name = user.name
      form.email = user.email
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/')
      form.name = ''
      form.email = ''
    }

    const goHome = () => {
      router.push('/');
    }

    return { form, update, goHome }
  }
}
</script>
