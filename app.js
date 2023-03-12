const app = Vue.createApp({
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "Name of the wind",
          author: "patrick Rothfuss",
          img: "assets/nat-1.jpg",
          isFav: true,
        },
        {
          title: "The way of the kings",
          author: "Brandon Sanderson",
          img: "assets/nat-2.jpg",
          isFav: false,
        },
        {
          title: "The final empire",
          author: "Brandon Sanderson",
          img: "assets/nat-3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
