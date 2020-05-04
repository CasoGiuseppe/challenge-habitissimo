import { Server } from 'miragejs';
import BUDGESTS from '@/mocks-data/budgets.json';

const mirage = new Server({
  seeds(server) {
    server.db.loadData({
      budgets: BUDGESTS,
    });
  },
  routes() {
    this.timing = 4000;
    this.namespace = 'api';
    this.get('/budgets/:id', (schema, request) => schema.db.budgets.findBy({ category: request.params.id }));
  },
});
