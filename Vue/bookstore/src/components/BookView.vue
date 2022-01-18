<template>
  <!-- TODO: implement me -->
  <div class="detail">
    <div class="book-cover">
      <img :src="bookDetail['thumbnail']" id="book-image" />
    </div>
    <div id="book-title">
      <p>
        {{ bookDetail["title"] }} <span v-if="bookDetail['subtitle']">-</span>
        {{ bookDetail["subtitle"] }}
      </p>
    </div>
    <div>
      <p>Authors:&nbsp;</p>
      <p>{{ bookDetail["authors"] }}</p>
    </div>
    <div>
      <p>Average rating:&nbsp;</p>
      <p>{{ bookDetail["average_rating"] }}</p>
    </div>
    <div>
      <p>Categories:&nbsp;</p>
      <p>{{ bookDetail["categories"] }}</p>
    </div>
    <div>
      <p>Description:&nbsp;</p>
      <p>{{ bookDetail["description"] }}</p>
    </div>
    <div>
      <p>Isbn10:&nbsp;</p>
      <p>{{ bookDetail["isbn10"] }}</p>
    </div>
    <div>
      <p>Isbn13:&nbsp;</p>
      <p>{{ bookDetail["isbn13"] }}</p>
    </div>
    <div>
      <p>Num pages:&nbsp;</p>
      <p>{{ bookDetail["num_pages"] }}</p>
    </div>
    <div>
      <p>Published year:&nbsp;</p>
      <p>{{ bookDetail["published_year"] }}</p>
    </div>
    <div>
      <p>Ratings count:&nbsp;</p>
      <p>{{ bookDetail["ratings_count"] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookIndex: Number,
    books: Array,
  },
  name: "BookView",
  computed: {
    bookDetail: function () {
      var subtitle = false;
      var bookLists = this.books[this.bookIndex];
      const res = { ...bookLists, ["subFlag"]: subtitle };
      return res;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.detail {
  border: 1px solid;
}
.detail > div {
  display: flex;
  padding: 0px 20px;
  border-bottom: 1px solid;
}
.detail > div p {
  margin: 0px;
  padding: 5px 0px;
}
.detail > div > p:first-child {
  font-weight: bold;
}
.detail img {
  width: 120px;
  height: 145px;
  border-radius: 5px;
}
.detail .book-cover {
  justify-content: center;
  padding: 20px;
}
.detail > div:first-child, .detail > div:nth-child(2) {
  border: none;
}
.detail > div:last-child {
  border: none;
}
</style>
