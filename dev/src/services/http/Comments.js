import { http } from './index';

class Comments {
  static getComments = async () => {
    try {
      const res = await http.get('comments');
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export {
  Comments,
};
