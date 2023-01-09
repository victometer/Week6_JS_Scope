// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//     };
    
// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }
    
// const verdict = declareMurderer();
// console.log(verdict);

// Miss Scarlet is the murderer, because const scenario got declared before the function, which means it can be used inside the function


//Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I think this will return an error, because you can't change a constant.  So this program shouldn't run. If it wasn't for the changeMurderer function though, declareMurderer would return Professor Plum.


//Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// First verdict calls the function declareMurderer that has changed the murderer locally, so it should display Mrs Peacock. The second verdict should be Professor Plum, because even though the murderer has been changed inside the function declareMurderer, it cannot be seen outside the function, as it's a block variable.


// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// console.log(suspects) will return Miss Scarlet, Professor Plum and Colonel Mustard. But the last console.log will return that suspect 3 is Mrs Peacock, because the cahnge that happened to suspect 3 was within the function and cannot be detected outside of it.

// Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon should be Revolver, because the weapon is a mutable object within the const scenario Object, this means it can be changed. Const scenario has also been declared before any of the functions, so it can be used within them.


// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
// }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Mrs White should be the answer after calling the plotTwist. But the plotTwist is within changeMurderer, so when changeMurderer gets called, it should return what plotTwist has returned - MrsWhite. DeclareMurderer should return Colonel Mustard, so the verdict is Colonel mustard.
// Ah! That's wrong. I figured out why the verdict is Mrs White. Mrs White was the answer for changeMurderer and it has a global scope, which makes declareMurderer call Mrs White as well, so the verdict becomes mrs White.

// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function() {
//             murderer = 'Miss Scarlet';
//     }

//         unexpectedOutcome();
// }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ChangeMurderer will return Miss Scarlet. DeclareMurderer should also return Miss Scarlet because that's the last change made in the nested function above and it has a global scope.


// Episode 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
    }

        const unexpectedOutcome = function(murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
        }
    }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Plotwist should return: Colonel Mustard, Candle Stick, Dining Room. But this is all within ChangeScenario function. At the end of the program, the new function gets called - declareWeapon, which is outside the above nested functions, so the weapon should remain the one declared at the start, in the const scenario, which is Lead Pipe.

// episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The verdict is Professor Plum, because the change that happens in the if statement doesn't get seen by the declareMurder function as it's outside its scope