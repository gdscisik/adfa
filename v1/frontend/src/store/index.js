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
