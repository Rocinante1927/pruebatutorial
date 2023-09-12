<template>
    <v-card
      class="mx-auto"
      max-width="344"
      title="REGISTRAR USUARIOS"
    >
      <v-container>
        <v-text-field
          v-model="first"
          color="primary"
          label="Nombres"
          placeholder="Escribe Nombres"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="last"
          color="primary"
          label="Apellidos"
          placeholder="Escribe Apellidos"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          placeholder="Escriba E-mail"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="primary"
          label="Contraseña"
          placeholder="Escriba contraseña"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="success">
          COMPLETAR REGISTRO
  
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <script>


  export default {
    data: () => ({
      
    }),
  
}
  </script>
       