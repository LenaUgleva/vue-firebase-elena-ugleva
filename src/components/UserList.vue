<template>
  <div v-if="users.length">
    <h1>Таблица пользователей</h1>
    <table>
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name, email } in users" :key="id">
          <td>{{ name }}</td>
          <td>{{ email }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button>
                Редактировать
              </button>
            </router-link>
            <button @click="deleteUser(id)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '@/firebase'

export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
