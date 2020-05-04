import { Server } from 'miragejs';
import QUOTES from '@/mocks-data/quotes.json';
import COMMENTS from '@/mocks-data/comments.json';

const mirage = new Server({
  seeds(server) {
    server.db.loadData({
      quotes: QUOTES,
      comments: COMMENTS,
    });
  },
  routes() {
    this.timing = 4000;
    this.namespace = 'api';

    // get quotes by ID
    this.get('/quotes/:id', (schema, request) => schema.db.quotes.findBy({ category: request.params.id }));

    // get all comments
    this.get('/comments', (schema, request) => schema.db.comments);
  },
});
