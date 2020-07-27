const state = {
  Items: [
    {
      title: "Discover",
      icon: "grade",
      to: "/discover"
    },
    {
      title: "Create",
      icon: "color_lens",
      to: "/create"
    },
    {
      title: "Work",
      icon: "architecture",
      to: "/work"
    },
    {
      title: "Play",
      icon: "sports_esports",
      to: "/play"
    },
    {
      title: "Develop",
      icon: "construction",
      to: "/develop"
    },
    {
      title: "Catagories",
      icon: "category",
      to: "/category"
    },
    {
      title: "Updates",
      icon: "play_for_work",
      to: "/update"
    }
  ]
};

const mutations = {};

const actions = {};

const getters = {
  menuItems: state => {
    return state.Items;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
