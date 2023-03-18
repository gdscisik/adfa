<template lang="pug">
div.container
  ul.forum__list
    ForumListItem(v-for="data in _getDonateRequestList" :key="data.id" :item="data")
</template>
<!-- <script>
import { appAxios } from "../../utils/appAxios";
import { mapGetters } from "vuex";
import ForumListItem from "./ForumListItem.vue";
export default {
  data() {
    return {};
  },
  components: {
    ForumListItem: ForumListItem,
  },
  methods: {
    getData() {
      return 1;
    },
  },
  computed: {
    ...mapGetters({
      _getSaltKey: "_getSaltKey",
      _getDonateRequests: "_getDonateRequests",
    }),
  },
  /* inject: {
    RequestList: forumData,
  }, */
};
</script> -->
<script setup>
import ForumListItem from "./ForumListItem.vue";
import { inject, computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const appAxios = inject("AppAxios");

const _getDonateRequests = computed(() => {
  return store.getters._getDonateRequests;
});

onMounted(() => {
  appAxios.get("/campaigns").then((response) => {
    console.log("response.data :>> ", response.data);
    store.commit("_setCampaigns", response.data);
  });
});
const _getDonateRequestList = computed(() => {
  return store.getters._getCampaigns;
});
/* const _getSaltKey = computed(() => {
  return store.getters._getSaltKey;
});
const changeSaltKey = () => {
  store.commit("_setSaltKey", "osmannurierdoganosizlimited");
}; */
// const forumData = inject("RequestList");
</script>
<style lang="scss">
.forum__list {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.6rem;
}
</style>
