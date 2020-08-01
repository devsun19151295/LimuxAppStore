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
      <div class="row q-pa-md justify-left q-electron-drag">
        <div class="btn btn-min" @click="minimize"></div>
        <div class="btn btn-max" @click="maximize"></div>
        <div class="btn btn-close" @click="closeApp"></div>
      </div>
      <div class="row _search-box justify-center">
        <q-input outlined v-model="search" placeholder="search" dense>
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row q-pt-sm justify-center full-width">
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
  },
  methods: {
    minimize() {
      if (process.env.MODE === "electron") {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize();
      }
    },

    maximize() {
      if (process.env.MODE === "electron") {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow();

        if (win.isMaximized()) {
          win.unmaximize();
        } else {
          win.maximize();
        }
      }
    },

    closeApp() {
      if (process.env.MODE === "electron") {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
._search-box {
  height: 70px;
}

/deep/ .q-drawer-container {
  .q-drawer {
    border-color: black;
  }
}

// Buttons
.btn {
  height: 15px;
  width: 15px;
  margin: 4px;
  border-radius: 50%;
  cursor: pointer;
}
.btn-min {
  background: #fac536;
  position: relative;
  overflow: hidden;
}
.btn-min::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 10%;
  opacity: 0;
  background: #222;
  transition: 300ms;
}
.btn-min:hover::before {
  opacity: 1;
  top: 50%;
}
.btn-max {
  background: #39ea49;
  position: relative;
  overflow: hidden;
}
.btn-max::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  height: 45%;
  opacity: 0;
  background: #222;
  transition: 300ms;
}
.btn-max::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 15%;
  height: 80%;
  opacity: 0;
  background: #39ea49;
  transition: 300ms;
}
.btn-max:hover::before,
.btn-max:hover::after {
  opacity: 1;
  top: 50%;
}
.btn-close {
  background: #f25056;
  position: relative;
  overflow: hidden;
}
.btn-close::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 15%;
  height: 50%;
  opacity: 0;
  background: #222;
  transition: 300ms;
}
.btn-close::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 15%;
  opacity: 0;
  height: 50%;
  background: #222;
  transition: 300ms;
}
.btn-close:hover::before,
.btn-close:hover::after {
  opacity: 1;
  top: 50%;
}
</style>
