/**It can be seen that to change the payment method for the store
changes have to be made every time inside the Store class.
**/
class Store {
  constructor(user) {
    this.user = user;
    //this.stripe = new Stripe(user);
    this.paypal = new Paypal();
  }
  purchaseBike(quantity) {
    //this.stripe.makePayment(200 * quantity * 100);
    this.paypal.makePayment(this.user, 200 * quantity)
  }
  purchaseHelmet(quantity) {
    //this.stripe.makePayment(15 * quantity * 100);
    this.paypal.makePayment(this.user, 15 * quantity)
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
