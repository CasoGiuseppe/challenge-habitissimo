export class LocalStorage {
  static update(name, newObject) {
    let temporary = localStorage.getItem(name);
    temporary = temporary ? JSON.parse(temporary) : {};

    for (let k of Object.keys(newObject)) {
      temporary[k] = Object.assign(temporary[k] || {}, newObject[k]);
    }

    localStorage.setItem(name, JSON.stringify(temporary));
  }
}
