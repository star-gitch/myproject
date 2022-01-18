<template>
  <!--<img src="@/assets/BooksList.jpg" class="img-fluid rounded" alt="" />-->
  <div class="p-list">
    <div
      class="book-list"
      id="books"
      v-for="(item, index) in bookdata"
      :key="index"
    >
      <div class="book" @click="selectItem(item.no)">
        <p class="book-title">{{ item.title }}</p>
        <p class="book-authors">{{ item.authors }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: Number,
    pageIndex: Number,
    books: Array,
  },
  computed: {
    bookdata: function () {
      console.log("listlll=", this.books);
      var tempBook = [];
      for (var i = 0; i < this.books.length; i++) {
        var temp = {
          ...this.books[i],
          ["no"]: i,
        };
        tempBook.push(temp);
      }
      const paginationFrom = this.pageIndex * this.size;
      const paginationTo = this.size * (this.pageIndex + 1);
      const res = tempBook.slice(paginationFrom, paginationTo);
      return res;
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    selectItem(index) {
      console.log("viewend=", index);
      this.testing = !this.testing;
      this.$emit("bookIndex", index);
    },
  },
};
</script>

<style scoped>
.p-list {
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 20px;
}
div.book-list {
  border-bottom: 1px solid black;
  padding: 5px 25px;
}
.book-list:last-child {
  border-bottom: none;
}
div.book-list p {
  margin: 0px;
}
.book:hover {
  cursor: pointer;
}
</style>
