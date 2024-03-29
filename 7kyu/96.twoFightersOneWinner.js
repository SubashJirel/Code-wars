/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let opponent = currentAttacker === fighter1 ? fighter2 : fighter1;

  while (true) {
    opponent.health -= currentAttacker.damagePerAttack;
    if (opponent.health <= 0) {
      return currentAttacker.name;
    }
    // Swap attacker and opponent
    let temp = currentAttacker;
    currentAttacker = opponent;
    opponent = temp;
  }
}

// Example usage:
let winner = declareWinner(
  new Fighter('Lew', 10, 2),
  new Fighter('Harry', 5, 4),
  'Lew'
);
console.log(winner); // Output: "Lew"
