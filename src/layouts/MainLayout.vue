<template>
  <q-layout view="hHh LpR lff">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
      :width="230"
    >
      <div class="row _search-box justify-center">
        <q-input outlined v-model="search" placeholder="search" dense>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row justify-center full-width">
        <MenuItem v-for="menu in menuItems" :key="menu.title" v-bind="menu" />
      </div>
    </q-drawer>

    <q-page-container padding class="bg-grey-10">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import MenuItem from "components/MenuItem";

export default {
  name: "MainLayout",
  components: {
    MenuItem
  },
  data() {
    return {
      search: "",
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapGetters("menu", ["menuItems"])
  },
  created() {
    this.$q.dark.set(true);
  }
};
</script>

<style lang="scss" scoped>
._search-box {
  height: 100px;

  .q-input {
    width: 180px;
  }
}

/deep/ .q-drawer-container {
  .q-drawer {
    border-color: black;
  }
}
</style>
