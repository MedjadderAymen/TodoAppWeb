<template>
  <nav>
    <v-app-bar app dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-bold">Aimen</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain color="" dark v-bind="attrs" v-on="on">
            <v-icon left> mdi-arrow-down </v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item router :to="link.route" v-for="link in links" :key="link.title">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn plain color="gray">
        <span>SignOut</span>
        <v-icon right>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="light">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-2.png" alt="avatar" />
          </v-avatar>
          <p class="grey--text subheading mt-1">The Net Ninja</p>
        </v-flex>
      </v-layout>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <span class="font-weight-light">Todo</span>
            <span class="font-bold">Aimen</span>
          </v-list-item-title>
          <v-list-item-subtitle>All in One</v-list-item-subtitle>
        </v-list-item-content>
        <v-divider class="dark"></v-divider>
      </v-list-item>
      <v-divider class="dark"></v-divider>
      <v-list dense nav rounded>
        <v-list-item
          router
          :to="link.route"
          v-for="link in links"
          :key="link.title"
          color="warning"
        >
          <v-list-item-icon>
            <v-icon> {{ link.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { title: "Peojects", icon: "mdi-folder", route: "/projects" },
        { title: "Team", icon: "mdi-account", route: "/team" },
      ],
    };
  },
};
</script>