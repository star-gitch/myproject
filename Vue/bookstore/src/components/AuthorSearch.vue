<template>
  <!-- TODO: implement me -->
  <p>Search books of author:</p>
  <vue3-simple-typeahead
    id="typeahead_id"
    placeholder="Stephen King..."
    :items="authors"
    :minInputLength="1"
    :itemProjection="itemProjectionFunction"
    @selectItem="testSearch"
    @onInput="sendKey"
    @onFocus="onFocusEventHandler"
    @onBlur="onBlurEventHandler"
  >
  </vue3-simple-typeahead>
</template>

<script>
export default {
  name: "AuthorSearch",
  props: {
    author: Array,
  },
  methods: {
    testSearch(search) {
      console.log("autocomplete=", search);
      this.$emit("select-author", search);
    },
    sendKey(search) {
      console.log("input=", search["input"]);
      this.$emit("select-author", search["input"]);
    },
  },
  computed: {
    authors: function () {
      return this.author;
    },
  },
};
</script>
<style>
.search {
    max-width: 500px;
  }
div#typeahead_id_wrapper input#typeahead_id {
  width: 100%;
  margin-bottom: 20px;
}
</style>
