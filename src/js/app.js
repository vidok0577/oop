// TODO: write your code here
import sum from './basic';
import Bowman from './class/bowman';
import Daemon from './class/daemon';
import Magician from './class/magician';
import Swordsman from './class/magician';
import Undead from './class/undead';
import Zombie from './class/zombie'


console.log('worked');

console.log(sum([1, 2]));

let bowman = new Bowman('Bowman');
console.log(bowman);

let daemon = new Daemon('Daemon');
console.log(daemon);

let magician = new Magician('Mag');
console.log(magician);

let swordsman = new Swordsman('Swordsman');
console.log(swordsman);

let undead = new Undead('Undead');
console.log(undead);

let zombie = new Zombie('Zombie');
console.log(zombie);
