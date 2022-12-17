class FlyingBird {
    fly() {
      console.log("I can fly");
    }
}

class SwimmingBird {
    swim() {
      console.log("I can swim");
    }
}
  
  class Duck extends FlyingBird {
      quack() {
          console.log('I can quack')
      }
  }
  
  class Penguin extends SwimmingBird {
      fly() {
          throw Error('I cant fly!!')
      }
  }
  
  function makeFlyingBirdFly(flyingBird){
    flyingBird.fly()
  }

  function makeSwimmingBirdSwim(swimmingBird){
    swimmingBird.swim()
}
  
  let duck = new Duck();
  let penguin = new Penguin();
  
  makeFlyingBirdFly(duck);
  makeSwimmingBirdSwim(penguin);
  