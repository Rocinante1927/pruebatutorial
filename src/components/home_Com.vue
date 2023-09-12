<template>
  
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>COLOMBIA INKJET</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn to="/login" variant="text" icon="mdi-dots-vertical" outlined>login</v-btn>

      </v-app-bar>

      <v-navigation-drawer v-model="drawer" permanent>
        <v-divider></v-divider>
        
        <v-list-item to="/compras" prepend-icon="mdi-forum" value="about" outlined>COMPRAS</v-list-item>
        <v-list-item to="/ventas" prepend-icon="mdi-forum" value="about" outlined>VENTAS</v-list-item>
        <v-list-item to="/registrar" prepend-icon="mdi-forum" value="about" outlined>REGISTRAR</v-list-item>
        <v-list-item to="/usuarios" prepend-icon="mdi-forum" value="about" outlined>TABLA</v-list-item>

      </v-navigation-drawer>

      <v-main style="height:100%;">
        <v-card-text>
          <router-view></router-view>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>
     
<script>


 


export default {

  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        
      },
      
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
     
    