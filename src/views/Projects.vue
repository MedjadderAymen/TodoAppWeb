<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects " :key="project.title">
          <v-expansion-panel-header> {{project.title}} </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">
              due by: {{project.due}}
            </div>
            <div>
              {{project.content}}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
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
          person: "Medjadder aimen",
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
          person: "Medjadder aimen",
          due: "Jan 21, 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam obcaecati aliquam voluptatibus enim aspernatur exercitationem consectetur eaque ea vero beatae. Error voluptatum ratione velit tempore expedita reiciendis, ab vel nam.",
        },
      ],
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Medjadder aimen'
      })
    }
  }
};
</script>