function imperialUnits(inches) {
    let feet  = parseInt(inches / 12);
    let inch = parseInt(inches -(feet*12));

    console.log(`${feet}'-${inch}"`);
}