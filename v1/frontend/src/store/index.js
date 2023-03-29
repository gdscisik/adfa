import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
import { appAxios } from "@/utils/appAxios";

// let ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?#",
    campaigns: [],
    donateRequests: [],
    userDonateRequests: [],
    categories: [],
    categoryList: [
      {
        id: 1,
        name: "Education",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source: "../../../src/assets/images/categories/education.png",
        categoryColor: "#1D81B9",
        backgroundCategoryColor: "#1D81B94D",
      },
      {
        id: 2,
        name: "Food",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source: "../../../src/assets/images/categories/food.png",
        categoryColor: "#B91D1D",
        backgroundCategoryColor: "#B91D1D4D",
      },
      {
        id: 3,
        name: "Personal Needs",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source:
          "../../../src/assets/images/categories/personal-needs.png",
        categoryColor: "#B3CC17",
        backgroundCategoryColor: "#B3CC174D",
      },
      {
        id: 4,
        name: "Natural Disasters",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source: "../../../src/assets/images/categories/disasters.png",
        categoryColor: "#0D921B",
        backgroundCategoryColor: "#0D921B4D",
      },
      {
        id: 5,
        name: "Scholarship",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source: "../../../src/assets/images/categories/scholarships.png",
        categoryColor: "#6A1CA6",
        backgroundCategoryColor: "#6A1CA64D",
      },
      {
        id: 6,
        name: "Institutions",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source: "../../../src/assets/images/categories/institutions.png",
        categoryColor: "#0F4632",
        backgroundCategoryColor: "#0F46324D",
      },
      {
        id: 7,
        name: "Clothes",
        description: "Lorem ipsum dolor sit amet, dolor lorem ipsum sit amet.",
        image_source: "../../../src/assets/images/categories/clothes.png",
        categoryColor: "#A8690B",
        backgroundCategoryColor: "#A8690B4D",
      },
    ],
  },
  mutations: {
    _setUser(state, user) {
      state.user = user;
    },
    _logoutUser(state) {
      state.user = null;
    },
    _setSaltKey(state, key) {
      state.saltKey = key;
    },
    _setCampaigns(state, campaigns) {
      state.campaigns = campaigns;
    },
    _setDonateRequests(state, requests) {
      state.donateRequests = requests;
    },
    _setCategories(state, categories) {
      state.categories = categories;
    },
    /* _setBookmarkList(state, bookmarkList) {
      state.bookmarkList = bookmarkList;
    },
    _changeBookmarksOfCategory(state, categoryId) {
      const url = categoryId
        ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
        : "/bookmarks?_expand=category&_expand=user";
      appAxios.get(url).then((response) => {
        state.bookmarkList = response.data;
      });
    },
    _updateLikes(state, likes) {
      state.user.likes = likes;
    },
    _updateBookmarks(state, bookmarks) {
      state.user.bookmarks = bookmarks;
    },
    _setUserLikes(state, userLikes) {
      state.userLikes = userLikes;
    },
    _setUserBookmarks(state, userBookmarks) {
      state.userBookmarks = userBookmarks;
    }, */
  },
  getters: {
    _getCategoryList(state) {
      return state.categoryList;
    },
    _isAuthenticated(state) {
      return state.user !== null;
    },
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _getCurrentUserId(state) {
      return state?.user?.id;
    },
    _getSaltKey(state) {
      return state.saltKey;
    },
    _getCampaigns(state) {
      return state.campaigns;
    },
    _getCategories(state) {
      return state?.categories || [];
    },
    _getDonateRequests(state) {
      return state?.donateRequests || [];
    },
    _getUserDonateRequests(state) {
      return state?.userDonateRequests || [];
    },
    /* _getUserLikes(state) {
      return state.user?.likes || [];
    },
    _getUserBookmarks(state) {
      return state.user?.bookmarks || [];
    }, */
  },
  // plugins: [
  //   createPersistedState({
  //     storage: {
  //       getItem: (key) => ls.get(key),
  //       setItem: (key, value) => ls.set(key, value),
  //       removeItem: (key) => ls.remove(key),
  //     },
  //   }),
  // ],
  actions: {},
  modules: {},
});
