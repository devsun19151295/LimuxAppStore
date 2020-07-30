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
  mounted() {}
};
</script>

<style lang="scss" scoped>
.q-item__section--avatar {
  min-width: 30px;
}
.q-item {
  color: $grey-4;
}
._menu-active {
  background: $grey-8;

  .q-icon {
    color: $grey-3;
  }
}
</style>
