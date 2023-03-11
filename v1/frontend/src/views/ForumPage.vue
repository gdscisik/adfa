<script setup>
import HeaderComponent from "@/components/Shared/Header/HeaderComponent.vue";
import ForumPageHeader from "@/components/Forum/ForumPageHeader.vue";
import ForumList from "@/components/Forum/ForumList.vue";
import FooterComponent from "@/components/Shared/Footer/FooterComponent.vue";
</script>
<template lang="pug">
HeaderComponent
main.container
  ForumPageHeader 
  ForumList 
FooterComponent
</template>
