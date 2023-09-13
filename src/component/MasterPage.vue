<template>
  <v-container>
    <v-card color="grey-lighten-4" flat height="500px" rounded="0">
      <v-toolbar density="compact" color="white">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Prueba tecnica</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="logout">
          Cerrar sesión
        </v-btn>
      </v-toolbar>
      <form @submit.prevent="submit">
        <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
          label="Producto"></v-text-field>

        <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
          label="Codigo"></v-text-field>

        <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
          label="Descripcion"></v-text-field>

        <v-select v-model="select.value.value" :items="items" :error-messages="select.errorMessage.value"
          label="Tipo de producto"></v-select>

        <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1" label="Option"
          type="checkbox"></v-checkbox>

        <v-btn class="me-4" type="submit">
          Guardar
        </v-btn>

        <v-btn @click="handleReset">
          Borrar
        </v-btn>
      </form>
    </v-card>
    <v-row>
      <v-col cols="12">
        <v-table fixed-header height="400px" table-column-padding="16px">
          <thead>
            <tr>
              <th class="text-left">
                Productos
              </th>
              <th class="text-left">
                Calorias
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { WebPages } from '@/constants';

import { ref } from 'vue';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()

const router = useRouter()

//const { logout } = mapActions('auth', ['logout']);
const logout = () => {
  console.log(store.state.authStore.isAuthenticated)
  const isAuthenticated = store.state.authStore.isAuthenticated

  if (isAuthenticated) store.commit('authStore/SET_IS_AUTHENTICATED', false)

  router.push({
    name: WebPages.HOME
  })

};

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Phone number needs to be at least 9 digits.'
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    select(value) {
      if (value) return true

      return 'Select an item.'
    },
    checkbox(value) {
      if (value === '1') return true

      return 'Must be checked.'
    },
  },
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
    calories: 305,
  },
  {
    name: 'Gingerbread',
    calories: 356,
  },
  {
    name: 'Jelly bean',
    calories: 375,
  },
  {
    name: 'Lollipop',
    calories: 392,
  },
  {
    name: 'Honeycomb',
    calories: 408,
  },
  {
    name: 'Donut',
    calories: 452,
  },
  {
    name: 'KitKat',
    calories: 518,
  },
];

</script>
<style scoped>
.collapsed>.when-opened,
:not(.collapsed)>.when-closed {
  display: none;
}

.card-body {
  padding: 0;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  flex-direction: column !important;
}

.padding-user {
  padding: 0.5rem 1rem;
}

.float-left {
  float: left;
  color: white;
}

.btn-transparent {
  background: transparent !important;
  border: none !important;
}

.btn-transparent:active {
  background: #f26d01 !important;
}

.btn-transparent:focus {
  background: #f26d01 !important;
}

.bg-darkblack {
  background: #ff7200;
}

.width-auto {
  width: 100%;
}

.router-link-active {
  background: #e06501 !important;
}

.color-white {
  color: white;
}

.list-style-none {
  list-style: none;
  margin-left: 0 !important;
  padding-left: 0 !important;
}

.MuiDrawer-paper {
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 15;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  width: 240px;
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  flex-shrink: 0;
  white-space: nowrap;
}

.makeStyles-toolbar-9 {
  display: flex;
  padding: 0px 8px;
  min-height: 68px;
  align-items: center;
  justify-content: center;
}

.bg-black {
  background: #ff7200;
}

.img-auto {
  width: 100%;
  height: auto;
  padding: 15px;
}

.display-inline-flex {
  display: inline-flex;
}

.padding-two-left {
  padding-left: 5px;
}

.float-left {
  text-align: left;
}

.nav-link {
  color: white;
  padding: 0.9rem 1rem;
}

.padding-two-left {
  padding-left: 4%;
}

ul>li {
  max-width: 100%;
}
</style>