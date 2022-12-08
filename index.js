const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    const fareMultiplier = function(multiplier) {
        return fare * multiplier;
    };
    return fareMultiplier;
}

const fareDoubler = function(fare) {
    createFareMultiplier(fare);
    return fare*2;
}

const fareTripler = function(fare) {
    createFareMultiplier(fare);
    return fare*3;
}

function selectDifferentDrivers(drivers, selection) {
    return selection(drivers)
    // if (selection === returnFirstTwoDrivers()) {
    //     return returnFirstTwoDrivers(drivers)
    // } else if (selection === returnLastTwoDrivers()) {
    //     return returnLastTwoDrivers(drivers)
    // }
}

