'use strict';

class HashStorage {
  constructor (){
    this.obj = {};
  }
  addValue(key, value){
    this.obj[key] = value;
  }
  getValue(key){
    return this.obj[key];
  }
  deleteValue(key){
    if (key in this.obj){
      delete this.obj[key];
      return true;
    } else return false;
  }
  getKeys(){
    return Object.keys(this.obj);
}
}
