import { http } from './index';

class Categories {
  static getAllCategories = async () => {
    try {
      const res = await http.get('category/list');
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  static getCategoryByID = async (payload) => {
    const { category } = payload;
    try {
      const res = await http.get(`category/list/${category}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export {
  Categories,
};
