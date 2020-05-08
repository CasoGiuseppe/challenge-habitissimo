import { http } from './index';

class Quotes {
  static getQuotesByID = async (payload) => {
    const { category } = payload;
    try {
      const res = await http.get(`quotes/${category}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export {
  Quotes,
};
