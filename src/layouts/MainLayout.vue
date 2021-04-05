<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm"> {{ $route.name }} </span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fab fa-twitter"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :width="283" show-if-above v-model="left" side="left" bordered>
      <q-icon class="q-pa-md" name="fab fa-twitter" size="lg" color="primary" />

      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input placeholder="Search Qwitter" outlined rounded dense class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list bordered padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">COVID-19</q-item-label>
            <q-item-label class="text-weight-bold">GOOD NEWS</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
              elit.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">COVID-19</q-item-label>
            <q-item-label class="text-weight-bold">GOOD NEWS</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
              elit.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">COVID-19</q-item-label>
            <q-item-label class="text-weight-bold">GOOD NEWS</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
              elit.</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label overline class="text-grey">COVID-19</q-item-label>
            <q-item-label class="text-weight-bold">GOOD NEWS</q-item-label>
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
              elit.</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
    };
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  left:50%
  bottom:0
  transform:translateX(50%)
</style>
