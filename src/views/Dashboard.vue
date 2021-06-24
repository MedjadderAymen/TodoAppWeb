<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container fluid class="my-5">
      <v-layout row wrap class="mb-3">
        <v-btn small text color="grey" @click="sortBy('title')">
          <v-icon left small> mdi-folder </v-icon>
          <span class="caption text-lowercase"> By project name </span>
        </v-btn>
        <v-btn small text color="grey" @click="sortBy('person')">
          <v-icon left small> mdi-account </v-icon>
          <span class="caption text-lowercase"> By person name </span>
        </v-btn>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('status')"
              v-bind="attrs" v-on="on">
              <v-icon left small> mdi-checkbox-marked-circle </v-icon>
              <span class="caption text-lowercase"> By person status </span>
            </v-btn>
          </template>
          <span>By person</span>
        </v-tooltip>
      </v-layout>

      <v-card
        elevation="0"
        class="grey lighten-5"
        tile
        v-for="project in projects"
        :key="project.person"
      >
        <v-card-text>
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <v-flex xs12 ms12 md6>
              <div class="caption gray--text">Project title</div>
              <div>{{ project.title }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption gray--text">Person</div>
              <div>{{ project.person }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption gray--text">Due by</div>
              <div>{{ project.due }}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="right" id="chips-container">
                <v-chip
                  small
                  :class="`${project.status} white--text my-2 caption`"
                  >{{ project.status }}</v-chip
                >
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [
        {
          title: "rutrum, justo. Praesent",
          person: "Cally Ward ",
          due: "Nov 18, 2020",
          status: "overdue",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam obcaecati aliquam voluptatibus enim aspernatur exercitationem consectetur eaque ea vero beatae. Error voluptatum ratione velit tempore expedita reiciendis, ab vel nam.",
        },
        {
          title: "adipiscing ligula. Aenean",
          person: "Brett Day",
          due: "Jan 7, 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam obcaecati aliquam voluptatibus enim aspernatur exercitationem consectetur eaque ea vero beatae. Error voluptatum ratione velit tempore expedita reiciendis, ab vel nam.",
        },
        {
          title: "urna justo faucibus",
          person: "Hollee Sosa",
          due: "Jan 20, 2021",
          status: "complete",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam obcaecati aliquam voluptatibus enim aspernatur exercitationem consectetur eaque ea vero beatae. Error voluptatum ratione velit tempore expedita reiciendis, ab vel nam.",
        },
        {
          title: "gravida sit amet,",
          person: "Dahlia Matthews",
          due: "Jan 30, 2022",
          status: "complete",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam obcaecati aliquam voluptatibus enim aspernatur exercitationem consectetur eaque ea vero beatae. Error voluptatum ratione velit tempore expedita reiciendis, ab vel nam.",
        },
        {
          title: "laoreet lectus quis",
          person: "Iliana Lindsey",
          due: "Jan 21, 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam obcaecati aliquam voluptatibus enim aspernatur exercitationem consectetur eaque ea vero beatae. Error voluptatum ratione velit tempore expedita reiciendis, ab vel nam.",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #aed581;
}

.project.ongoing {
  border-left: 4px solid #4dd0e1;
}

.project.overdue {
  border-left: 4px solid #ffb300;
}

#chips-container .v-chip.complete {
  background: #3cd1c2;
}
#chips-container .v-chip.ongoing {
  background: #ffaa2c;
}
#chips-container .v-chip.overdue {
  background: #f83e70;
}
</style>
