<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container fluid class="my-5">
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="person in team"
          v-bind:key="person.name">
          <v-card class="text-sm-center ma-3">
            <v-responsive class="pt-4">
               <v-avatar size="100">
                    <img
                      :src="person.avatar"
                      :alt="person.name"
                    >
                  </v-avatar>
              
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat text small color="grey">
                <v-icon small text left> mdi-folder </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        { name: "aimen", role: "web developer", avatar:'/avatar-1.png' },
        { name: "amar", role: "backend developer", avatar:'/avatar-2.png' },
        { name: "mohammed", role: "flutter developer", avatar:'/avatar-3.png' },
        { name: "benali", role: "android developer", avatar:'/avatar-4.png' },
        { name: "jme9ji", role: "web designer", avatar:'/avatar-5.png' },
      ],
    };
  },
};
</script>