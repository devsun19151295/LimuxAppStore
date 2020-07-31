<template>
  <div class="row justify-center full-width q-pt-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      arrows
      control-color="primary"
      height="300px"
      class="_slide-list"
    >
      <template v-for="(item, index) in itemList">
        <q-carousel-slide :name="index" class="column no-wrap" :key="index">
          <div class="row justify-center q-gutter-md q-col-gutter no-wrap ">
            <q-card class="_box-in-slide">
              <q-card-section horizontal class="full-width full-height">
                <q-card-section class="full-height items-center ">
                  <div
                    class="text-sub-title-color text-overline text-weight-bold text-uppercase"
                  >
                    {{ item.firstContent.category }}
                  </div>
                  <div class="text-h5 q-mt-sm q-mb-xs _cut-long-text">
                    {{ item.firstContent.title }}
                  </div>
                  <div class="text-caption q-mt-sm text-grey _cut-long-text">
                    {{ item.firstContent.description }}
                  </div>
                </q-card-section>

                <q-card-section class="_box-image col-6 flex flex-center">
                  <q-avatar size="200px">
                    <q-img :ratio="1" :src="item.firstContent.imageUrl" />
                  </q-avatar>
                </q-card-section>
              </q-card-section>
            </q-card>
            <q-card class="_box-in-slide">
              <q-card-section horizontal class="full-width full-height">
                <q-card-section class="full-height items-center ">
                  <div
                    class="text-sub-title-color text-overline text-weight-bold text-uppercase"
                  >
                    {{ item.secordContent.category }}
                  </div>
                  <div class="text-h5 q-mt-sm q-mb-xs _cut-long-text">
                    {{ item.secordContent.title }}
                  </div>
                  <div class="text-caption text-grey _cut-long-text">
                    {{ item.secordContent.description }}
                  </div>
                </q-card-section>

                <q-card-section class="_box-image col-6 flex flex-center">
                  <q-avatar size="200px">
                    <q-img :ratio="1" :src="item.secordContent.imageUrl" />
                  </q-avatar>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </div>
</template>

<script>
export default {
  props: ["itemList"],
  data() {
    return {
      slide: 0
    };
  },
  created() {
    console.log(this.itemList);
  }
};
</script>

<style lang="scss">
._slide-list {
  width: 100%;

  ._box-in-slide {
    width: 100%;
    height: 17rem;
    box-shadow: none;

    border-radius: 10px;
    background-color: $grey-9;
  }
}

.q-carousel__slides-container {
  .q-panel {
    background-color: $grey-10;
  }

  .q-carousel__slide {
    padding: unset;
    padding-top: 16px;
  }
}

._cut-long-text {
  max-height: 128px;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: $breakpoint-sm-max) {
  ._box-image {
    display: none;
  }
}
@media (max-width: 1174px) {
  ._box-image {
    display: none;
  }
}
</style>
