import { http } from './index';

class Budgets {
  static getBudgets = async (payload) => {
    const { category } = payload;
    try {
      const res = await http.get(`budgets/${category}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export {
  Budgets,
};
