<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700&family=Open+Sans&display=swap');

  .h-100 {
    min-height: 100vh;
    overflow-y: auto;
  }

  .w-25 {
    width: 25%;
  }

.flex {
  display: flex;

  &.f-column {
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

  &.items-center {
    align-items: center;
  }

  &.space-around {
    justify-content: space-around
  }
}
.inline-flex {
  display: inline-flex;

  &.f-column {
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

  &.items-center {
    align-items: center;
  }
}


@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #2B32FB;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

$family-sans-serif: "Nunito Sans", sans-serif;
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
$card-radius: 1em;
$card-header-color: white;
$card-header-background-color: #454545;

.card {
  border-radius: 6px !important;
}

.w-50 {
  width: 50%;
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>
