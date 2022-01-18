<template>
  <!-- TODO: implement me -->
  <div>
    <button
      type="button"
      id="pagination-back-button"
      class="btn btn-primary"
      v-bind:class="{ disabled: !prevBtnStatus }"
      @click="prevPage"
    >
      Previous
    </button>
    <button
      type="button"
      id="pagination-next-button"
      v-bind:class="{ disabled: !nextBtnStatus }"
      class="btn btn-secondary"
      @click="nextPage"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: "BooksListPagination",
  props: {
    paginationIndex: Number,
    size: Number,
    totalSize: Number,
  },
  computed: {
    prevBtnStatus: function () {
      if (!this.paginationIndex) {
        return false;
      } else {
        return true;
      }
    },
    nextBtnStatus: function () {
      if ((this.paginationIndex + 1) * this.size >= this.totalSize) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {},
  methods: {
    nextPage() {
      this.$emit("nextPage", this.paginationIndex);
    },
    prevPage() {
      this.$emit("prevPage", this.paginationIndex);
    },
  },
};
</script>
<style scoped>
div {
  text-align: center;
  margin-top: 20px;
}
</style>
