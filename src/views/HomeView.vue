<template>
    <v-app>
      <div id="building"></div>
      <v-container>
        <v-card width="450" class="mx-auto mt-9">
          <v-card-title align="center" justify="space-around">
            PRUEBA TECNICA
          </v-card-title>
          <v-form
            ref="formulario"
            v-model="formStatus"
          >
            <v-card-text>
              <v-text-field 
                label="Usuario" 
                prepend-icon="mdi-account-circle" 
                v-model="userInfo.user"
                required
                />
              <v-text-field 
                label="Contraseña" 
                :type="showPassword ? 'text' : 'password'" 
                v-model="userInfo.password"
                required
                prepend-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append-inner="showPassword = !showPassword" />
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="d-flex justify-center" >
              <v-btn 
                color="black"
                @click="loginUser" 
              >Ingresar
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
          <v-snackbar
          :color="alert.color"
          v-model="snackBar"
          timeout="5000"
        >
          {{ alert.text }}
        </v-snackbar>
      </v-container>
    </v-app>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const formStatus = ref(false);
const showPassword = ref(false);
const snackBar = ref(false);

const userInfo = reactive({
  user: '',
  password: ''
});

const alert = reactive({
  text: '',
  color: 'error'
});

const loginUser = async () => {
  // Validar el formulario (si es necesario)
  // await context.refs.formulario.validate();
  
  // Comprobar las credenciales en duro
  if (userInfo.user === 'rut' && userInfo.password === '123456') {
    formStatus.value = true;
    snackBar.value = true;
    // Redirigir al usuario después de iniciar sesión correctamente
    router.push({
      name: 'system'
    });
  } else {
    // Credenciales incorrectas
    formStatus.value = false;
    snackBar.value = true;
    alert.text = 'Credenciales incorrectas';
    alert.color = 'error';
  }
};
</script>
