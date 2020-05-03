import { http } from './index';

class Budgets {
  static getBudgets = async (payload) => {
    const { id } = payload;
    try {
      const res = await http.get(`budgets/${id}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export {
  Budgets,
};
