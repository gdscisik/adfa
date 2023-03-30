<template lang="pug">
HeaderComponent
div.container
  div.grid.grid--1-1.container--request-page
    div.request__image
      img(:src="request.imageSource")
    div.request__content
      h2.request__content-title {{ request.title }}
      p.request__content-paragraph {{ request.description }}
      button.button.button--pay-amount Pay Now
  //- div.container.container--request-page-donate
    div.request__donate
      div.request__donate-inputs
        div.request__donate-inputs-identify
          label(for="currencyType") Choose Currency Type
          //- select(id="currencyType" v-model="currencyType")
          select(id="currencyType")
            option(value="TRY") TRY
            option(value="EUR") EUR
            option(value="USD") USD
      div.request__donate-inputs
        div.request__donate-inputs-identify
          label(for="predefinedDonateAmount") Choose Donation Amount
          //- input(type="radio" name="chooseDonationAmount" id="predefinedDonateAmount" v-model="predefinedDonateAmount")
          input(type="radio" name="chooseDonationAmount" id="predefinedDonateAmount")
        div.request__donate-inputs-amounts
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="10%" id="10%")
            input(type="radio" name="predefinedDonateAmounts" value="10%" id="10%")
            label(for="10%") 10%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="20%" id="20%")
            input(type="radio" name="predefinedDonateAmounts" value="20%" id="20%")
            label(for="20%") 20%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="30%" id="30%")
            input(type="radio" name="predefinedDonateAmounts" value="30%" id="30%")
            label(for="30%") 30%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="40%" id="40%")
            input(type="radio" name="predefinedDonateAmounts" value="40%" id="40%")
            label(for="40%") 40%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="50%" id="50%")
            input(type="radio" name="predefinedDonateAmounts" value="50%" id="50%")
            label(for="50%") 50%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="60%" id="60%")
            input(type="radio" name="predefinedDonateAmounts" value="60%" id="60%")
            label(for="60%") 60%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="70%" id="70%")
            //- input(type="radio" name="predefinedDonateAmounts" value="70%" id="70%")
            input(type="radio" name="predefinedDonateAmounts" d="70%")
            label(for="70%") 70%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="80%" id="80%")
            input(type="radio" name="predefinedDonateAmounts" value="80%" id="80%")
            label(for="80%") 80%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="90%" id="90%")
            input(type="radio" name="predefinedDonateAmounts" value="90%" id="90%")
            label(for="90%") 90%
          div.emergency-box
            //- input(type="radio" name="predefinedDonateAmounts" v-model="predefinedDonateAmountPercentage" value="100" id="100%")
            input(type="radio" name="predefinedDonateAmounts" value="100" id="100%")
            label(for="100%") 100%
      p.or OR
      div.request__donate-inputs.request__donate-inputs--last-row
        div.request__donate-inputs-identify
          label(for="predefinedDonateAmount") Set Your Own Amount
          //- input(type="radio" name="chooseDonationAmount" id="predefinedDonateAmount" v-model="customDonateAmountSelected")
          input(type="radio" name="chooseDonationAmount" id="predefinedDonateAmount")
        //- input(type="number", name="customAmount", id="customAmount" v-model="customAmount")
        input(type="number" min="1" name="customAmount" id="customAmount")
      button.button.button--pay-amount Pay Now
  //- pre {{ request }}
FooterComponent
</template>
<style lang="scss">
button.button.button--pay-amount {
  background-color: var(--color-primary-green);
  color: var(--color-header-background);
  font-weight: 600;
  font-size: 1.6rem;
  // width: 100%;
  padding: 1.2rem 3.6rem;
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
}
p.or {
  font-size: 2.4rem;
  text-align: center;
  margin: {
    top: 1.2rem;
    bottom: 1.2rem;
  }
}
.container--request-page {
  margin: 2.4rem auto;
}
.request {
  &__content {
    &-title {
      font-size: 2.2rem;
      margin: 1.2rem auto;
    }
    &-paragraph {
      font-size: 1.8rem;
    }
  }
  &__image {
    // height: 75%;
    & img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }
  &__donate {
    font-size: 1.6rem;
    // padding: 2.4rem auto;
    &-inputs {
      // align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2.4rem;
      & > label {
        font-size: 1.8rem;
      }
      &--last-row {
        flex-direction: row;
        // display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &-amounts {
        display: flex;
        // gap: 2.4rem;
        justify-content: space-between;
        align-items: center;
        & > div {
          display: flex;
          flex-direction: column;
        }
      }
      &-identify {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2.4rem;
      }
    }
  }
}
</style>
<script setup>
import HeaderComponent from "@/components/Shared/Header/HeaderComponent.vue";
import FooterComponent from "@/components/Shared/Footer/FooterComponent.vue";
import { inject, onMounted, ref } from "vue";
// import { useStore } from "vuex";
const appAxios = inject("AppAxios");
// const store = useStore();

// const currencyType = ref("");
// const predefinedDonateAmount = ref("");
// const predefinedDonateAmountPercentage = ref("");
// const customDonateAmountSelected = ref("off");
// const customAmount = ref(0);
const request = ref({});
onMounted(() => {
  appAxios
    .get(`/requests/${location.pathname.substring(10)}`)
    .then((response) => {
      // console.log("response :>> ", response.data);
      request.value = response.data;
      //console.log("${location.toString} :>> ", location.pathname.substring(10));
    });
});
</script>
