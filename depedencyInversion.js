import promptSync from 'prompt-sync';

const prompt = promptSync();

/*
Create a wrapper for payment so that we never have to change the
payment logic inside the Store class.
*/

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user)
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class PaypalPaymentProcessor {
    constructor(user){
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars)
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

let name = prompt('What is your name: ')
console.log();
console.log('Choose your payment method:\n');
console.log('1. Stripe Payment');
console.log('2. Paypal Payment');
let choice = prompt('Choice: ')
let paymentProcessor = choice === '1'? new StripePaymentProcessor(name) : new PaypalPaymentProcessor(name);

const store = new Store(paymentProcessor);
store.purchaseBike(2);
store.purchaseHelmet(2);
