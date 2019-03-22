class CustomRandom {
  constructor(n){
    this.max = n;
	var d = new Date();
    var timeMilisec = d.getTime();
    this.last = timeMilisec % this.max;
  }

  get nextInt() {
	//Translate boolean to int values
    var i = this.flip() ? 1 : 0;
    this.last = (this.last * 32719 + i) % 32749;
    return this.last % this.max;
  }
  
  flip() {
     return Math.random() >= 0.5;
  }
}

test_list = [500, 1, 500, 1000001, 25];
test_list.forEach(function(element){
  if(element < 1000001){
    const randomNum = new CustomRandom(element);
    console.log("Num: " + randomNum.max + "- random n: " + randomNum.nextInt);
	}
   else {
     console.log("Error: Not valid number");
   }
});
