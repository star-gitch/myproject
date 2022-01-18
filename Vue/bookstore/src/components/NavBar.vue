<template>
  <nav class="navbar navbar-light bg-light border rounded mt-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-book-half"></i>
        HAUSAUFGABE 4
      </a>

      <div>
        <!-- TODO: implement -->

        <button class="btn btn-primary me-3" type="submit" @click="toggleTests">
          <i class="bi bi-robot"></i>
          {{ !testsOpen ? "Run tests" : "Close tests" }}
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          id="btn-dark-mode"
          @click="toggleDarkMode"
        >
          {{ themeBtnLabel }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["testsOpen"],
  data() {
    return {
      themeBtnLabel: "Lights off",
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.themeBtnLabel === "Lights off") {
        this.themeBtnLabel = "Lights on";
      } else {
        this.themeBtnLabel = "Lights off";
      }
      this.$emit("changeTheme");
    },
    toggleTests() {
      this.$emit("toggle-tests");
    },
  },
};
</script>
