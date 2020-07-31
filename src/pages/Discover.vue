<template>
  <q-page class="q-pa-xl">
    <FirstContent v-bind="firstContentItem"></FirstContent>

    <BoxListContent :itemList="boxListItem"></BoxListContent>

    <div class="row items-center justify-center">
      <q-separator class="q-mt-md" color="grey-8" size="1px" inset />
    </div>

    <!-- content -->
    <!-- <div class="row q-col-gutter-md q-col-gutter-y-lg q-mt-xs">
      <div class="col-4" v-for="n in 10" :key="`none-${n}`">
        <div class="my-content">&nbsp;</div>
      </div>
    </div> -->

    <div class="row items-center justify-center">
      <q-separator class="q-mt-md" color="grey-8" size="1px" inset />
    </div>
  </q-page>
</template>

<script>
import FirstContent from "components/FirstContent";
import BoxListContent from "components/BoxListContent";

export default {
  name: "DescoverPage",
  components: { FirstContent, BoxListContent },
  data() {
    return {
      firstContentItem: {
        imageUrl:
          "https://dashboard.snapcraft.io/site_media/appmedia/2018/03/Screenshot_20180326_233800.png",
        category: "game snaps",
        title: "Shattered Pixel Dungeon",
        description:
          "Shattered Pixel Dungeon is a Rogue-like RPG, with pixel art graphics, lots of variety and replay-ability."
      },
      boxListItem: [
        {
          firstContent: {
            imageUrl:
              "https://res.cloudinary.com/canonical/image/fetch/q_auto,f_auto,w_875/https://admin.insights.ubuntu.com/wp-content/uploads/7389/header-cover.png",
            category: "Development",
            title: "Snaps help Xibo rekindle its relationship with Linux",
            description: "by Sarah Dickinson on 27 August 2019"
          },
          secordContent: {
            imageUrl:
              "https://res.cloudinary.com/canonical/image/fetch/q_auto,f_auto,w_875/https://admin.insights.ubuntu.com/wp-content/uploads/ec14/noom-peerapong-30948-unsplash.jpg",
            category: "Development",
            title: "Make compelling videos with free software: Director’s Cut",
            description:
              "Creating videos is easy. Creating great videos, not so much. "
          }
        },
        {
          firstContent: {
            imageUrl:
              "https://res.cloudinary.com/canonical/image/fetch/q_auto,f_auto,w_875/https://admin.insights.ubuntu.com/wp-content/uploads/166f/lucia-lua-ramirez-lG0AHN1Gapw-unsplash.jpg",
            category: "productivity",
            title:
              "Productivity is but a snap away – useful applications for your everyday needs",
            description:
              "The state of being productive comes in various guises. "
          },
          secordContent: {
            imageUrl:
              "https://res.cloudinary.com/canonical/image/fetch/q_auto,f_auto,w_875/https://admin.insights.ubuntu.com/wp-content/uploads/9805/Flokk.png",
            category: "Development",
            title: "Canonical Offers Flutter Support for Linux Desktop Apps",
            description:
              "Google aims to be a portable framework for building beautiful UIs that run at native speed"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.my-content {
  padding: 10px 15px;
  background: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}
</style>
