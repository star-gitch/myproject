<template>
  <head>
    <link id="bootstrap-theme" rel="stylesheet" :href="currentThemeUrl" />
  </head>
  <div class="container">
    <tests v-if="testing"></tests>

    <div class="row mb-3">
      <div class="col">
        <nav-bar
          ref="navBar"
          :tests-open="testing"
          @toggle-tests="toggleTests"
          @changeTheme="setTheme"
        >
        </nav-bar>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <author-search
          ref="authorSearch"
          v-bind:author="authorsList"
          @select-author="findAuthor"
        ></author-search>

        <books-list
          :size="windowSize"
          :pageIndex="page"
          :books="booksList"
          @bookIndex="getBookList"
          ref="booksListView"
        ></books-list>

        <books-list-pagination
          ref="booksListPagination"
          :paginationIndex="page"
          :size="windowSize"
          :totalSize="booksList.length"
          @nextPage="getNextPage"
          @prevPage="getPrevPage"
        ></books-list-pagination>
      </div>

      <div class="col">
        <book-view :bookIndex="selectedIndex" :books="booksList"></book-view>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorSearch from "./components/AuthorSearch.vue";
import BooksList from "./components/BooksList.vue";
import BooksListPagination from "./components/BooksListPagination.vue";
import BookView from "./components/BookView.vue";
import NavBar from "./components/NavBar.vue";
import Tests from "./components/Tests.vue";
import bookdata from "./assets/books.json";

export default {
  name: "App",
  components: {
    AuthorSearch,
    BooksList,
    BooksListPagination,
    BookView,
    NavBar,
    Tests,
  },
  data() {
    return {
      page: 0,
      windowSize: 5,
      selectedIndex: 0,
      booksList: [],
      coreBooksList: [],
      authorsList: [],
      filterList: [],
      filterFn: () => true,
      themeFlag: 1,
      currentThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      lightThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      darkThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-night.min.css",
      testing: false,
    };
  },
  mounted() {
    bookdata.sort((a, b) =>
      a["title"].localeCompare(b["title"], "fr", { ignorePunctuation: true })
    );
    var tempBook = [];
    for (var i = 0; i < bookdata.length; i++) {
      var temp = {
        ...bookdata[i],
        ["authors"]: bookdata[i]["authors"].replaceAll(";", ","),
      };
      tempBook.push(temp);
    }
    this.booksList = tempBook;
    this.coreBooksList = tempBook;

    // Authors
    var authors = [];
    for (i = 0; i < this.booksList.length; i++) {
      if (this.booksList[i]["authors"]) {
        if (this.booksList[i]["authors"].includes(",")) {
          const subArr = this.booksList[i]["authors"].split(",");
          for (var j = 0; j < subArr.length; j++) {
            authors.push(subArr[j]);
          }
        } else {
          authors.push(this.booksList[i]["authors"]);
        }
      }
    }

    let uniqueAuthors = [...new Set(authors)];
    const filteredAuthors = uniqueAuthors.filter(Boolean);
    filteredAuthors.sort((a, b) =>
      a.localeCompare(b, "fr", { ignorePunctuation: true })
    );

    this.authorsList = filteredAuthors;
  },
  methods: {
    toggleTests() {
      this.testing = !this.testing;
    },
    getBookList(index) {
      console.log("BookIndex=", index);
      this.selectedIndex = index;
    },
    getNextPage(index) {
      this.page = index + 1;
    },
    getPrevPage(index) {
      console.log("PrevPaginatin");
      this.page = index - 1;
    },
    setTheme() {
      if (this.themeFlag === 1) {
        this.currentThemeUrl = this.darkThemeUrl;
        this.themeFlag = 2;
      } else {
        this.currentThemeUrl = this.lightThemeUrl;
        this.themeFlag = 1;
      }
    },
    findAuthor(searchKey) {
      if (searchKey) {
        console.log("kch=", searchKey);
        var filterAuthors = [];
        this.booksList = this.coreBooksList;
        for (var i = 0; i < this.booksList.length; i++) {
          if (
            this.booksList[i]["authors"]
              .toLowerCase()
              .includes(searchKey.toLowerCase())
          ) {
            filterAuthors.push(this.booksList[i]);
          }
        }
        this.booksList = filterAuthors;
        this.page = 0;
        this.selectedIndex = 0;
      } else {
        bookdata.sort((a, b) =>
          a["title"].localeCompare(b["title"], "fr", {
            ignorePunctuation: true,
          })
        );
        var tempBook = [];
        for (var j = 0; j < bookdata.length; j++) {
          var temp = {
            ...bookdata[j],
            ["authors"]: bookdata[j]["authors"].replaceAll(";", ","),
          };
          tempBook.push(temp);
        }
        this.booksList = tempBook;
        this.page = 0;
        this.selectedIndex = 0;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
