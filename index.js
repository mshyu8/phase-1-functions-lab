// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    let blocks;
    if(location > 42) {
        blocks = location - 42;
    } else if (42 > location) {
        blocks = 42 - location;
    } else {
        blocks = 0;
    }

    return blocks;
}

function distanceFromHqInFeet(blocks) {
    let totalBlocks = distanceFromHqInBlocks(blocks);

    let feet = totalBlocks * 264;

    return feet;
}  

function distanceTravelledInFeet(start, destination) {
    let totalFeet;
    let blocks;

    if (start > destination) {
        blocks = start - destination;
    } else if (start < destination) {
        blocks = destination - start;
    } else {
        blocks = 0;
    }

    totalFeet = blocks * 264;

    return totalFeet;
}

function calculatesFarePrice(start, destination) {

    let feet = distanceTravelledInFeet(start, destination);
    let totalFee;

    if (feet < 400) {
        totalFee = 0;
    } else if (feet < 2000) {
        totalFee = (feet - 400) * 0.02;
    } else if (feet < 2500) {
        totalFee = 25;
    } else {
        totalFee = 'cannot travel that far';
    }
    return totalFee;
}

