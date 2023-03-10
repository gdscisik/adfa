import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import { appAxios } from "@/utils/appAxios";

let ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike123!456?#",
    bookmarkList: [],
    userLikes: [],
    userBookmarks: [],
  },
  mutations: {
    _setUser(state, user) {
      state.user = user;
    },
    _logoutUser(state) {
      state.user = null;
    },
    _setBookmarkList(state, bookmarkList) {
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
    },
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
    _getCategoryAndUserData(state) {
      return state.bookmarkList;
    },
    _getUserLikes(state) {
      return state?.userLikes || [];
    },
    _getUserBookmarks(state) {
      return state?.userBookmarks || [];
    },
    // _getUserLikes(state) {
    //   return state.user?.likes || [];
    // },
    // _getUserBookmarks(state) {
    //   return state.user?.bookmarks || [];
    // },
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
