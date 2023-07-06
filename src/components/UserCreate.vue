<template>
  <h1>Форма создания пользователя</h1>
  <div>
    <form @submit.prevent="onSubmit">
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
        Создать пользователя
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ name: '', email: '' })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
    }

    return { form, onSubmit }
  }
}
</script>
