<template>
  <div class="_first-content row justify-center full-width">
    <q-card class="_head-box">
      <q-card-section>
        <q-img class="_head-image" :src="imageUrl">
          <div class="absolute-top text-subtitle1 text-left">
            <div class="row q-pt-md">
              <div class="_opty-7 text-weight-bold text-caption text-uppercase">
                {{ category }}
              </div>
            </div>
            <div class="row q-pt-sm">
              <div class="text-h5 text-weight-400">{{ title }}</div>
            </div>
            <div class="row q-pt-sm">
              <div class="_opty-7 text-caption">
                {{ description }}
              </div>
            </div>
          </div>
        </q-img>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },

    category: {
      type: String,
      default: ""
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
._first-content {
  margin-top: -50px;
}

._head-box {
  width: 100%;
  box-shadow: none;

  .q-card__section--vert {
    padding: unset;
  }

  ._head-image {
    height: 22rem;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .q-img__content > div {
    background: unset;
  }
}
</style>
