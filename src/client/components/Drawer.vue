<template>

  <v-navigation-drawer app v-model="drawer" style="max-height: 100%" dark class="secondary" disable-resize-watcher>

   <v-list class="pa-1">
    <v-list-tile avatar>
      <v-list-tile-content class="head_title">
        <h1>Simple database</h1>
      </v-list-tile-content>
    </v-list-tile>
   </v-list>

  <v-list class="pt-0">

    <v-divider></v-divider>

    <div v-for="(item, i) in items" :key="i">

       <div v-if="item.items.length > 0">
          <v-list-group v-model="item.active" no-action @click="listItemOnClick(item)">

                <v-list-tile slot="activator">
                  <v-list-tile-action>
                    <v-icon medium>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="(subitem, z) in item.items" :key="z" @click="">

                    <v-list-tile-action>
                      <v-icon medium v-bind:color="item.color">{{ subitem.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{ subitem.title }}</v-list-tile-title>

                </v-list-tile>

        </v-list-group>
     </div>

     <div v-else>
       <v-list-tile @click="">
         <v-list-tile-action>
           <v-icon medium v-bind:color="item.color">{{ item.icon }}</v-icon>
          </v-list-tile-action>
         <v-list-tile-title>{{ item.title }}</v-list-tile-title>
       </v-list-tile>
     </div>

   </div>

  </v-list>

</v-navigation-drawer>

</template>

<style scoped>

h1 {
   font-family: "Comic Sans MS";
}

</style>

<script>

import { bus } from "@/main.js";

export default {
  name: "AppDrawer",
  data: () => ({
    drawer: false,
    items: [
          { title: 'Номе', icon: 'home', color: '#FFFF', active: false, items: [] },
          { title: 'Catalogues', icon: 'folder', color: '#FFFF', active: false,
                items: [
                   { title: 'Users', icon: 'group', color: '#FFFF', active: false, items: [] },
                   { title: 'Books', icon: 'chrome_reader_mode', color: '#FFFF', active: false, items: [] },
                   { title: 'Words', icon: 'sort_by_alpha', color: '#FFFF', active: false, items: [] }
                ]
          },
          { title: 'About', icon: 'question_answer', color: '#FFFF', active: false, items: [] }
    ]
  }),
  methods: {
    listItemOnClick (item) {
      item.active = !item.active;
    }
  },
  created () {
     bus.$on("toggleDrawerEvent", (data) => this.drawer = !this.drawer );
  }
};

</script>
