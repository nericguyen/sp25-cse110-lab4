let statistic = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (car in statistic) {
    if(statistic[car] % 2 == 1 || car.startsWith("r")) {
        console.log(statistic[car]);
    }
}