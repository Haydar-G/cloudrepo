//car.name = Fiat

//car.model = 500

//car.weight = 850kg

//car.color = white

//car.start()

//car.drive()

//car.brake()

//car.stop()


let car = {
    carName: "range rover",
    model: "vellar",
    carWeight: 80,
    engineName: "turbo",

    start: function () {
        console.log("vrooooooom");

    },

    drive: function () {
        console.log("car is moving");

    },

    brake: function () {
        console.log("krrrrrr");

    },

    stop: function () {
        console.log("car has stopped");

    }


};

console.log(car);
console.log( car.carName,car.model,car.carWeight,car.engineName);

car.carName;
car.model;
car.carWeight;
car.engineName;

car.start();
car.drive();
car.brake();
car.stop();

let farmer = {
    name : "Haydar Badawi",
    age : "35",
    isRegistered : true,
    greetFarmer : function(){
        console.log("Welcome" + " " + this.name + " " + "!")
    },

    chickRequest: function(quantity){
        console.log(this.name + " " + "requested for" + " " + quantity + " " + "chicks")
    }
}

console.log(farmer.age);
farmer.greetFarmer();
farmer.chickRequest(100);