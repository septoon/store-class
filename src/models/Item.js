export default class Item {
  constructor(some) {
    Object.assign(this, {
      brand: '',
      title: '',
      description: '',
      descriptionFull: '',
      currency: '',
      price: null
    }, some);
  }
}
