<template>
<div class="bw-table">
  <v-toolbar color="white" class="table-toolbar">
      <v-toolbar-title>Users</v-toolbar-title>
      <v-divider class="mx-3" inset vertical></v-divider>
      <v-btn @click="goToPage" color="primary" flat icon><v-icon>reply</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="createItem" color="success" dark class="mb-2">Add</v-btn>
  </v-toolbar>

  <user-modal></user-modal>

  <v-data-table
    :pagination.sync="pagination"
    :headers="headers"
    :items="users"
    :rows-per-page-items="rows"
    v-model="selected"
    item-key="username"
    select-all
    class="elevation-1"
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td>
        <v-checkbox
          v-model="props.selected"
          primary
          hide-details>
        </v-checkbox>
      </td>
      <td class="text-xs-left">{{ props.item.username }}</td>
      <td class="text-xs-left">{{ props.item.age }}</td>
      <td class="text-xs-center">{{ props.item.gender }}</td>
      <td class="text-xs-center">{{ props.item.firstname }}</td>
      <td class="text-xs-center">{{ props.item.middlename }}</td>
      <td class="text-xs-center">{{ props.item.lastname }}</td>
      <td class="text-xs-center">{{ props.item.password }}</td>
      <td class="justify-center layout px-0">
         <v-icon
           small
           class="mr-2"
           @click="editItem(props.item)">
           edit
         </v-icon>
         <v-icon
           small
           @click="deleteItem(props.item)">
           delete
         </v-icon>
       </td>
    </template>
  </v-data-table>

</div>
</template>

<script>
// @ is an alias to /src
import UserModal from "@/client/components/catalogues/modals/user.vue";
import { mapState } from 'vuex';

export default {
  name: "users",
  components: { UserModal },
  data: () => ({
      search: '',
      selected: [],
      pagination: {},
      rows:[5,10,15,25,{"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}],
      headers: [
        {
          text: 'User name',
          align: 'left',
          sortable: true,
          value: 'user name'
        },
        { text: 'Age', value: 'age' },
        { text: 'Gender', value: 'gender' },
        { text: 'First name', value: 'first name' },
        { text: 'Middle name', value: 'middle name' },
        { text: 'Last name', value: 'last name' },
        { text: 'Password', value: 'password' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
  }),
  methods: {
    filterList(e) {
      this.$store.commit('users/filterList', e.target.value);
    },
    goToPage() {
      this.$router.push("/catalogues");
    },
    editItem (item) {
      this.$modal.show('user-modal', { mode: "edit", item: item });
    },
    deleteItem (item) {
       //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      this.$store.dispatch('users/deleteUser', item._id);
    },
    createItem () {
      this.$modal.show('user-modal', { mode: "create", item: undefined });
    }
  },
  computed: {
     ...mapState({
        users: state => state.users.all
     })
  },
  //life-cycle hooks
  mounted() {
    this.$store.dispatch('users/getUsers');
  },
  beforeUpdate() {
    //alert(this.users);
  }
};
</script>

<style scoped>
.bw-table {
   padding-top: 20px;
   padding-left: 20%;
   padding-right: 20%;
}
.table-toolbar {
  -webkit-box-shadow: 0px -1px 3px -1px rgba(0,0,0,0.7);
  -moz-box-shadow: 0px -1px 3px -1px rgba(0,0,0,0.7);
   box-shadow: 0px -1px 3px -1px rgba(0,0,0,0.7);
}
</style>
