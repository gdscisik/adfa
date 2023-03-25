// const db = require('../loaders');
module.exports = class Service {
  async findAll(query) {
    return this.model.find(query);
  }
  /* async findAll() {
    return this.model.find();
  } */
  async findById(query) {
    return this.model.find(query);
  }
  /* async findById(itemId) {
    return this.model.findById(itemId);
  } */
  async add(item) {
    return this.model.create(item);
  }
  async delete(query) {
    return this.model.deleteOne(query);
  }
  /* async delete(itemId) {
    return this.model.deleteOne({ _id: itemId });
  } */
  /* async update(query, data) {
    return this.model.findByIdAndUpdate(query, data, { new: true });
  } */
  async update(query, data) {
    return this.model.update(query, data);
  }
  /* async update(item, data) {
    return this.model.findOneAndUpdate(item, data, { new: true });
  } */
};

