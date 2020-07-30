<template>
  <q-page>
    <div class="row justify-center full-width">
      <q-card class="_head-box">
        <q-card-section>
          <q-img
            class="_head-image"
            src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_1920,h_640/https://dashboard.snapcraft.io/site_media/appmedia/2019/10/gimp-splash-fs8.png"
          >
            <div class="absolute-top text-subtitle1 text-left">
              <div class="row q-pt-md">
                <div
                  class="_opty-7 text-weight-bold text-caption text-uppercase"
                >
                  Featured snaps
                </div>
              </div>
              <div class="row q-pt-sm">
                <div class="text-h5 text-weight-400">Flokk Contacts</div>
              </div>
              <div class="row q-pt-sm">
                <div class="_opty-7 text-caption">
                  Flutter showcase app for your Google Contacts.
                </div>
              </div>
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </div>

    <div class="row justify-center full-width q-pt-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        padding
        arrows
        height="300px"
        class="_slide-list"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div
            class="row full-width justify-center q-gutter-sm q-col-gutter no-wrap "
          >
            <q-card class="_box-in-slide ">
              <q-card-section class="full-width full-height">
                <div class="row full-width full-height justify-between">
                  <div class="_box-item-text col-sm-12 col-md-6 column q-pa-md">
                    <div class="q-pt-xs text-weight-bold text-uppercase ">
                      <div class="_box-text text-sub-title-color">
                        Meet the developer
                      </div>
                    </div>
                    <div class="q-pt-xs text-h5 text-weight-400">
                      <div class="_box-text">AsssistiveWare: a world of</div>
                    </div>
                    <div class="q-pt-xs text-body1">
                      <div class="_box-text text-sub-title-color">
                        help a friend - example
                      </div>
                    </div>
                  </div>
                  <div
                    class="_box-item-image col-md-6 column full-height justify-center items-center "
                  >
                    <div class="row q-pr-sm">
                      <q-avatar size="200px">
                        <q-img
                          :ratio="1"
                          src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_692,h_462/https://admin.insights.ubuntu.com/wp-content/uploads/abdb/ethan-hoover-334116-unsplash.jpg"
                        />
                      </q-avatar>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card class="_box-in-slide ">
              <q-card-section class="full-width full-height">
                <div class="row full-width full-height justify-between">
                  <div class="col-md-6 _box-item-text col-sm-12 column q-pa-md">
                    <div class="q-pt-xs text-weight-bold text-uppercase ">
                      <div class="text-sub-title-color">
                        Meet the developer
                      </div>
                    </div>
                    <div class="q-pt-xs text-h5 text-weight-400">
                      <div class="_box-text">AsssistiveWare: a world of</div>
                    </div>
                    <div class="q-pt-xs text-body1">
                      <div class="text-sub-title-color">
                        help a friend - example
                      </div>
                    </div>
                  </div>
                  <div
                    class="_box-item-image col-6 column full-height justify-center items-center "
                  >
                    <div class="row q-pr-sm">
                      <q-avatar size="200px">
                        <q-img
                          :ratio="1"
                          src="https://res.cloudinary.com/canonical/image/fetch/q_auto,f_auto,w_860/https://dashboard.snapcraft.io/site_media/appmedia/2019/01/2-slack-snap-integrations.png"
                        />
                      </q-avatar>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide>
        <!-- <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-center q-gutter-sm q-col-gutter no-wrap">
            <q-card class="_box-in-slide ">
              <q-card-section>
                test 3
              </q-card-section>
            </q-card>
            <q-card class="_box-in-slide ">
              <q-card-section>
                test 4
              </q-card-section>
            </q-card>
          </div>
        </q-carousel-slide> -->
      </q-carousel>
    </div>

    <div class="row items-center justify-center">
      <q-separator
        class="q-mt-md"
        style="width: 90%;"
        color="grey-8"
        size="1px"
        inset
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "DescoverPage",
  data() {
    return {
      slide: 1
    };
  }
};
</script>

<style lang="scss" scoped>
._head-box {
  width: 90%;
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

/deep/ .q-carousel__slides-container {
  .q-panel {
    background-color: $grey-10;
  }
}

@media (max-width: $breakpoint-sm-max) {
  ._box-item-image {
    display: none;
  }
}
@media (max-width: 1174px) {
  ._box-item-image {
    display: none;
  }
}
</style>
