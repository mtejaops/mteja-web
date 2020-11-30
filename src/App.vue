<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  .h-100 {
    height: 100vh;
  }

.flex {
  display: flex;

  &.column {
    flex-direction: column;
  }

  &.row {
    flex-direction: row;
  }

  &.centered {
    justify-content: center;
  }

  &.v-centered {
    align-items: center;
  }
}


@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #2B32FB;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

$family-sans-serif: "Open Sans", sans-serif;
$family-primary: "Open sans", sans;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>
