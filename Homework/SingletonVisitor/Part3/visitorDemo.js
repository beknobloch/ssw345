
let CarVisitor = function()
{
    this.visit = function(car)
    {
        if (car.seats > 2)
        {
            console.log("This is clearly a car for old people.");
        }
        else
        {
            console.log("My bet is this car has at least 2 cylinders.");
        }
    }
}

let TruckVisitor = function()
{
    this.visit = function(truck)
    {
        if (truck.towPackage)
        {
            console.log("We need to buy a boat.");
        }
    }
}

let MonsterTruckVisitor = function()
{
    this.visit = function(monsterTruck)
    {
        if (monsterTruck.looksLikeADragon)
        {
            console.log("That is a badass monster truck.");
        }
        else
        {
            console.log("Loser");
        }
    }
}



let carVariable = function()
{
    let seats = 5;
    let doors = 4;
    this.accept = function(visitorObject)   { visitorObject.visit(this); }
}

let truckVariable = function()
{
    let towPackage = true;
    let doors = 2;
    this.accept = function(visitorObject)   { visitorObject.visit(this); }
}

let monsterTruckVariable = function()
{
    let looksLikeADragon = true;
    let doors = 1.5;
    this.accept = function(visitorObject)   { visitorObject.visit(this); }
}


let myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor());

let myMonsterTruck = new monsterTruckVariable();
myMonsterTruck.looksLikeADragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());

let myCar2 = new carVariable();
myCar2.seats = 2;
myCar2.accept(new MonsterTruckVisitor());