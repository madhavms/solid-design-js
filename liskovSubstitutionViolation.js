class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Duck extends Bird {
    quack() {
        console.log('I can quack')
    }
}

class Penguin extends Bird {
    fly() {
        throw Error('I cant fly!!')
    }
}

function makeBirdFly(bird){
    bird.fly()
}

let duck = new Duck();
let penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);
