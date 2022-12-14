//Stick to single responsibility and seperate concerns using modules
import logMessage from './logger.js'

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
        logMessage("Max calories exceeded");
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(900)
calorieTracker.trackCalories(700)