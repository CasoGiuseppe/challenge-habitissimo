import { Constants } from '@/constants.js';

export class LocalStorage {
  static update(name, newObject) {
    let temporary = localStorage.getItem(name);
    temporary = temporary ? JSON.parse(temporary) : {};

    for (let k of Object.keys(newObject)) {
      console.log(k);
      temporary[k] = Object.assign(temporary[k] || {}, newObject[k]);
    }

    localStorage.setItem(name, JSON.stringify(temporary));
  }

  static exist() {
    const storage = JSON.parse(localStorage.getItem(Constants.LOCALSTORAGE));
    return storage && storage.values;
  }
}
