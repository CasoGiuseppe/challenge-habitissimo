import { Server } from 'miragejs';
import QUOTES from '@/mocks-data/quotes.json';
import COMMENTS from '@/mocks-data/comments.json';
import CATEGORIES from '@/mocks-data/categories.json';

const mirage = new Server({
  seeds(server) {
    server.db.loadData({
      quotes: QUOTES,
      comments: COMMENTS,
      categories: CATEGORIES,
    });
  },
  routes() {
    this.timing = 2000;
    this.namespace = 'api';

    // get quotes by ID
    this.get('/quotes/:id', (schema, request) => schema.db.quotes.findBy({ category: request.params.id }));

    // get all comments
    this.get('/comments', (schema, request) => schema.db.comments);

    // get all categories
    this.get('/category/list', (schema, request) => schema.db.categories);

    // get subcategories by id
    this.get('/category/list/:id', (schema, request) => schema.db.categories.findBy({ slug: request.params.id }));
  },
});
