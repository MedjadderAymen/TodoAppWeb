<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="green lighten-2"
          elevation="0"
          dark
          v-bind="attrs"
          v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Add new project
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="title" v-model="title" placeholder="project title here" prepend-icon="mdi-folder"
                        :rules="inputRules"></v-text-field>
          <v-textarea label="information" clearable clear-icon="mdi-close-circle" counter v-model="content"
                      prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field prepend-icon="mdi-calendar" :value="formattedDate" clearable label="Due date" readonly
                            v-bind="attrs" v-on="on" @click:clear="date = null" :rules="inputRules"></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false"> Close</v-btn>
        <v-btn color="blue darken-1" text @click="submit" :loading="loading"> Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

import {format, parseISO} from 'date-fns'
import moment from 'moment'
import db from '../firebase'

export default {
  name: "Popup",
  data() {
    return {
      dialog: false,
      title: '',
      content: '',
      due: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 chars'
      ],
      loading: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {

        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format('dddd, MMMM Do YYYY'),
          person: "the net ninja",
          status: 'ongoing'
        }

        db.collection('projects').add(project).then(() => {
          this.loading = false;
          this.dialog = false;

          this.$emit('popupShow')

          this.title = ''
          this.content = ''
          this.due = format(parseISO(new Date().toISOString()), 'yyyy-MM-dd')

        });
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format('dddd, MMMM Do YYYY') : '';
    }
  }
};
</script>