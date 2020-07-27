<template>
  <q-item
    :to="to"
    active-class="_menu-active"
    exact
    clickable
    class="full-width q-mt-xs"
  >
    <q-item-section avatar>
      <q-icon size="30px" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-h6 text-left text-weight-regular">
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "MenuItems",
  props: {
    title: {
      type: String,
      required: true
    },

    icon: {
      type: String,
      required: true
    },

    to: {
      type: String,
      required: true,
      default: "/"
    }
  },
  mounted() {
    console.log(this.to);
  }
};
</script>

<style lang="scss" scoped>
._menu-active {
  background: $tab;
}
</style>
