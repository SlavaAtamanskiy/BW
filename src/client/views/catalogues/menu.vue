<template>
<v-container
   class="bw-container"
   grid-list-xl text-xs-center
   fluid>
   <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="#ffff" dark hover>
          <v-card-actions>
             <v-btn flat color="orange">
                <router-link to="/catalogues/users">Users</router-link>
             </v-btn>
          </v-card-actions>
          <img class="local-image" src="../../assets/users.png">
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card color="#ffff" dark hover>
                  <img class="local-image" src="../../assets/books.jpg">
                  <v-card-actions>
                     <v-btn flat color="orange"><router-link to="/catalogues/books">Books</router-link></v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex d-flex xs12>
                <v-card color="#ffff" dark hover>
                  <img class="local-image" src="../../assets/words.jpg">
                  <v-card-actions>
                     <v-btn flat color="orange"><router-link to="/catalogues/words">Words</router-link></v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark hover>
          <v-card-text>Some content 1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark hover>
          <v-card-text>Some content 2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.bw-container {
  background-color: inherit;
  width:100%;
  height: 100%;
  padding-left: 7%;
  padding-top: 3%;
}
.local-image {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  name: "app-menu",
  data: () => ({
    content: [{
          name: "Books",
          route: "/catalogues/books",
          image: "../../assets/books.jpg"
      },
      {
          name: "Words",
          route: "/catalogues/words",
          image: '<img class="local-image" src="../../assets/books.jpg">'
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
