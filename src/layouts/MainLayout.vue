<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
      :width="230"
    >
      <!-- drawer content -->
      <div class="row search-box justify-center">
        <q-input outlined v-model="search" placeholder="search" dense>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row justify-center full-width">
        <MenuItem
          v-for="menu in menuItems"
          :key="menu.title"
          :title="menu.title"
          :icon="menu.icon"
          :to="menu.to"
        ></MenuItem>
      </div>
    </q-drawer>

    <q-page-container>
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
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  height: 100px;

  .q-input {
    width: 180px;
  }
}
/deep/ .q-item__section--avatar {
  min-width: 30px;
}
/deep/ .q-item {
  color: $layout-text;
}
</style>
