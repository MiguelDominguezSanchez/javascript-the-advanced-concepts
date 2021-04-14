///////////////////////
// 3.3 Lexical Environment

// const { string } = require('prop-types')

/*
function printName() {
	return 'Andrei Neagoie'
}

function findName() {
	function a() {}
	return printName()
}

function sayMyName() {
	return findName()
}

window.sayMyName()
*/

///////////////////////
// 3.4 Hoisting

/*
console.log('1--------')
console.log(teddy)
console.log(sing2)
var teddy = 'bear'

// function expression
var sing2 = function () {
	console.log('uhhh la la la')
}

// function declaration
function sing() {
	console.log('ohhh la la la')
}
*/

///////////////////////
// 4.5 Exercise Hoisting

/*
one = undefined
var one = 1
var one = 2

console.log(one)
*/

/*
// a()

function a() {
	console.log('hi')
}

function a() {
	console.log('bye')
}
a()
*/

///////////////////////
// 4.6 Exercise Hoisting 2

/*
const favouriteFood = 'grapes'

const foodThoughts = function () {
	console.log('Original favourite food: ' + favouriteFood)

	const favouriteFood = 'sushi'

	console.log('New favourite food: ' + favouriteFood)
}

foodThoughts()
*/

///////////////////////
// 4.7 Exercise Hoisting 3

/*
function bigBrother() {
	function littleBrother() {
		return 'it is me!'
	}
	return littleBrother()
	function littleBrother() {
		return 'no me!'
	}
}

// Before running this code, what do you think the output is?
console.log(bigBrother())
*/

///////////////////////
// 4.8 Function Invocation

// Function Expression
/*
var canada = function () {
	console.log('cold')
}
*/
/*
var canada = () => {
	console.log('cold')
}

// Function Declaration
function india() {
	console.log('warm')
}

// Function Invocation/Call/Execution
canada()
india()
*/
/*
function marry(person1, person2) {
	console.log('arguments', arguments)
	console.log(Array.from(arguments))
	return `${person1} is now married to ${person2}`
}

console.log(marry('Tim', 'Tina'))
*/
/*
function marry2(...args) {
	console.log('arguments', args)
	console.log(Array.from(arguments))
	return `${args[0]} is now married to ${args[1]}`
}

console.log(marry2('Tim', 'Tina'))
*/
/*
var canada = () => {
	console.log('cold')
}

// Function Declaration
function india() {
	console.log(arguments)
	console.log('warm')
}

// Function Invocation/Call/Execution
// canada()
india()
*/

///////////////////////
// 4.10 Variable Environment

/*
function two() {
	var isValid //undefined
}

function one() {
	var isValid = true // local/variable environment
	two() // new EC
}

var isValid = false
one()

// we also have 'one' and 'two' functions in the global variable environment.
// two() -- undefined
// one() -- true
//global() --false
*/

///////////////////////
// 4.11 Scope Chain

/*
var x = 'x'
function findName() {
	console.log(x)
	var b = 'b'
	return printName()
}

function printName() {
	var c = 'c'
	return 'Andrei Neagoie'
}

function sayMyName() {
	var a = 'a'
	return findName()
}
*/

/*
function sayMyName() {
	var a = 'a'
	return function findName() {
		var b = 'b'
		return function printName() {
			var c = 'c'
			console.log(a)
			return 'Andrei Neagoie'
		}
	}
}

// console.log(sayMyName())
// console.log(sayMyName()())
console.log(sayMyName()()())
*/

///////////////////////
// 3.12 [[scope]]

///////////////////////
// 4.13 Exercise JS is Weird

/*
'use strict'
function weird() {
	height = 50
	return height
}

console.log(weird())
*/

/*
var heyhey = function doodle() {
	// do something
	return 'heyhey'
}

console.log(heyhey())
console.log(doodle())
*/

///////////////////////
// 3.13 Foundation Scope vs Block Scope

// function scope
// vs
// block scope
/*
if (5 > 4) {
	var secret = '12345'
}

console.log(secret)
*/

// Block Scope
/*
if (5 > 4) {
	const secret = '12345'
}

console.log(secret)
*/
/*
if (5 > 4) {
	let secret = '12345'
}

console.log(secret)
*/

///////////////////////
// 3.15 Exercise Block Scope

/*
function loop() {
	for (var i = 0; i < 5; i++) {
		console.log(i)
	}
	console.log('final', i)
}

loop()
*/
/*
function loop() {
	for (let i = 0; i < 5; i++) {
		console.log(i)
	}
	console.log('final', i)
}

loop()
*/

///////////////////////
// 3.16 Global Variables

///////////////////////
// 3.17 IIFE

/*
;(function () {
	var a = 1
})()

a
*/

///////////////////////
// 3.18 This Keyword

// obj.someFunc(this)

/*
const obj = {
	name: 'Billy',
	sing: function () {
		return 'lalala Billy'
	},
}

const obj = {
	name: 'Veronica',
	sing: function () {
		return 'lalala Veronica'
	},
}
*/

/*
const obj = {
	name: 'Veronica',
	sing: function () {
		return 'lalala ' + this.name
	},
}
*/
/*
const obj = {
	name: 'Veronica',
	sing: function () {
		return 'lalala' + obj.name
	},
}
*/
/*
console.log(obj.sing())
*/
/*
const obj = {
	name: 'Billy',
	sing: function () {
		return 'lalala ' + this.name
	},
}

console.log(obj.sing())
*/
/*
const obj = {
	name: 'Billy',
	sing() {
		return 'lalala ' + this.name
	},
	singAgain() {
		return 'lalala ' + this.name + '!'
	},
}

console.log(obj.singAgain())
*/

//1: gives methods access to their object
//2: execute the same code for multiple objects
/*
const obj = {
	name: 'Billy',
	sing() {
		return 'lalala ' + this.name
	},
	singAgain() {
		return this.sing() + '!'
	},
}

console.log(obj.singAgain())
*/
/*
function importantPerson() {
	console.log(this.name + '!')
}

// window.importantPerson()
const name = 'Sunny'
const obj1 = {
	name: 'Cassy',
	importantPerson: importantPerson,
}
const obj2 = {
	name: 'Jacob',
	importantPerson: importantPerson,
}
importantPerson()
obj1.importantPerson()
obj2.importantPerson()
*/

///////////////////////
// 3.19 Exercise Dynamic Scope vvs Lexical Scope
/*
const a = function () {
	console.log('a', this)
	const b = function () {
		console.log('b', this)
		const c = {
			hi: function () {
				console.log('c', this)
			},
		}
		c.hi()
	}
	b()
}

a()
*/
/*
const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunc = function () {
			console.log('b', this)
		}
		anotherFunc()
	},
}

obj.sing()
*/
/*
const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunc = () => {
			console.log('b', this)
		}
		anotherFunc()
	},
}

obj.sing()
*/

/*
const obj = {
	name: 'Billy',
	sing() {
		console.log('a', this)
		var anotherFunc = () => {
			console.log('b', this)
		}
		return anotherFunc.bind(this)
	},
}

obj.sing()()
*/

/*
const obj = {
	name: 'Billy',
	sing: function () {
		console.log(this)
		var self = this
		var anotherFunc = function () {
			console.log(self)
		}
		return anotherFunc
	},
}

obj.sing()()
*/

///////////////////////
// 3.20 call(), apply(), bind()

/*
call()
apply()
bind()
*/

/*
function a() {
	console.log('hi')
}

// a.call()
// a()
a.apply()
*/

/*
const wizard = {
	name: 'Merlin',
	health: 50,
	heal() {
		return (this.health = 100)
	},
}

const archer = {
	name: 'Robin Hood',
	health: 30,
}

console.log('1', archer)
console.log(wizard.heal.call(archer))
console.log('2', archer)
*/

/*
const wizard = {
	name: 'Merlin',
	health: 50,
	heal(num1, num2) {
		return (this.health += num1 + num2)
	},
}

const archer = {
	name: 'Robin Hood',
	health: 30,
}

console.log('1', archer)
console.log(wizard.heal.call(archer, 50, 30))
console.log('2', archer)
*/

/*
const wizard = {
	name: 'Merlin',
	health: 50,
	heal(num1, num2) {
		return (this.health += num1 + num2)
	},
}

const archer = {
	name: 'Robin Hood',
	health: 30,
}

console.log('1', archer)
console.log(wizard.heal.apply(archer, [100, 30]))
console.log('2', archer)
*/

/*
const wizard = {
	name: 'Merlin',
	health: 50,
	heal(num1, num2) {
		return (this.health += num1 + num2)
	},
}

const archer = {
	name: 'Robin Hood',
	health: 30,
}

console.log('1', archer)
const healArcher = wizard.heal.bind(archer, 100, 30)
healArcher()
console.log('2', archer)
*/

///////////////////////
// 3.22 bind() and currying

//function currying
/*
function multiply(a, b) {
	return a * b
}

let multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(4))
*/

///////////////////////
// 3.23 Exercise This Keyword

/*
var b = {
	name: 'jay',
	say() {
		console.log(this)
	},
}

var c = {
	name: 'jay',
	say() {
		return function () {
			console.log(this)
		}
	},
}

var d = {
	name: 'jay',
	say() {
		return () => console.log(this)
	},
}

// b.say()
// console.log(c.say()())
// c.say()()
// console.log(d.say())
console.log(d.say()())
*/

///////////////////////
// 4.2 Javascript Types

/*
// Primitive
console.log(typeof 5)
console.log(typeof true)
console.log(typeof 'To be or not to be')
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol('just me'))

// Non-Primitive
const obj1 = {
	a: 'Tom',
}
console.log(typeof {})
console.log(typeof [])
console.log(typeof function () {})

function a() {
	return 5
}

console.log((a.hi = 'hihihihihi'))
*/

/*
console.log(true.toString())
console.log(Boolean(true).toString())
*/

/*
console.log(typeof Math)
console.log(typeof Infinity)
*/

///////////////////////
// 4.3 Array.isArray()

/*
var array = [1, 2, 3]

var array = {
	0: 1,
	1: 2,
	2: 3,
}

console.log(typeof [])

var something
*/

/*
console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray({}))
*/
/*
var a = 5
var b = 10
*/

/*
var a = 5
var b = a

b++
*/

/*
console.log(a)
console.log(b)
*/

/*
let obj1 = { name: 'Yao', password: '123' }
let obj2 = obj1

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)
*/

/*
var c = [1, 2, 3, 4, 5]
var d = [].concat(c)
d.push(187628761)
console.log(c)
console.log(d)
*/

/*
let obj = { a: 'a', b: 'b', c: 'c' }
let clone = Object.assign({}, obj)
let clone2 = { ...obj }

obj.c = 5
console.log(obj)
console.log(clone)
console.log(clone2)
*/

/*
let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me',
	},
}
let clone = Object.assign({}, obj)
let clone2 = { ...obj }
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha'
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)
*/

///////////////////////
// 4.7 Type Coercion

/*
console.log(1 == '1')
console.log(1 == 1)
console.log(1 === '1')
*/

// if (1) {
// 	console.log(5)
// }

/*
if (0) {
	console.log(5)
}
*/

/*
console.log(Object.is(-0, +0))
console.log(NaN === NaN)
*/

///////////////////////
// 4.10 JTS Dynamic vs Static Typing

///////////////////////
// 4.11 JTS Weakly vs Strongly Typed

///////////////////////
// 4.12 JTS Static Typing in Javascript

///////////////////////
// 5.2 Functions are objects

/*
function one() {
	return 1
}

console.log(one())
*/

/*
const obj = {
	two: function () {
		return 2
	},
}
console.log(obj.two())
*/

/*
function three() {
	return 3
}
console.log(three.call())
*/

/*
const four = new Function('return 4')
console.log(four())
*/

/*
const four = new Function('num', 'return num')
console.log(four(4))
*/

/*
function wooohooo() {
	console.log('wooohooo')
}
*/

// wooohooo.yell = 'ahhhhhhh'

/*
const specialObj = {
	yell: 'ahhhhhhh',
	name: 'wooohooo',
	(): console.log('wooohooo')
}
*/

/*
console.log(wooohooo.name)

const obj = {

}

obj.argument
*/

///////////////////////
// 5.3 First Class Citizens

// Functions are first class citizens in JS

/*
// 1
var stuff = function () {}
// 2
function a(fn) {
	fn()
}

a(function () {
	console.log('hi there')
})
// 3
function b() {
	return function c() {
		console.log('bye')
	}
}

console.log(b())
console.log(b()())

var d = b()
console.log(d())
*/

///////////////////////
// 5.4 Extra Bits Functions

/*
for (let i = 0; i < 5; i++) {
	function a() {}
	a()
}

//

function a() {}
for (let i = 0; i < 5; i++) {
	a()
}
*/

/*
function a() {
	return param
}

a()

function a(param) {
	return param
}

a()

function a(param = 6) {
	return param
}

console.log(a())
*/

///////////////////////
// 5.5 Higher Order Functions

/*
function letAdamLogin() {
	let array = []
	for (let i = 0; i < 1000000; i++) {
		array.push(i)
	}
	return 'Access Granted to Adam'
}

function letEvaLogin() {
	let array = []
	for (let i = 0; i < 1000000; i++) {
		array.push(i)
	}
	return 'Access Granted to Eva'
}

console.log(letAdamLogin())
console.log(letEvaLogin())
*/

/*
const giveAccessTo = name => 'Access Granted to ' + name

function authenticate(verify) {
	let array = []
	for (let i = 0; i < verify; i++) {
		array.push(i)
	}
	return true
}
function letUserLogin(user) {
	//++ we now tell //WHAT DATA to use.

	return giveAccessTo(user)
}

function letAdminLogin(admin) {
	let array = []
	for (let i = 0; i < 5000000; i++) {
		array.push(i)
	}
	return giveAccessTo(admin)
}
const giveAccessTo = name => 'Access Granted to ' + name

function letUserLogin(user) {
	//++ we now tell //WHAT DATA to use.

	return giveAccessTo(user)
}

function letAdminLogin(admin) {
	let array = []
	for (let i = 0; i < 5000000; i++) {
		array.push(i)
	}
	return giveAccessTo(admin)
}
*/

//

/*
const giveAccessTo = name => 'Access Granted to ' + name

function authenticate(verify) {
	let array = []
	for (let i = 0; i < verify; i++) {
		array.push(i)
	}
	return giveAccessTo(person.name)
}
function sing(person) {
	return 'la la la my name is ' + person.name
}
function letPerson(person, fn) {
	// ++ tell it what data to user + function.
	if (person.level === 'admin') {
		return fn(person)
	} else if (person.level === 'user') {
		return fn(person)
	}
}

console.log(letPerson({ level: 'user', name: 'Tim' }, authenticate))
console.log(letPerson({ level: 'admin', name: 'Sally' }, authenticate))

console.log(letPerson({ level: 'admin', name: 'Sally' }, sing))
*/

///////////////////////
// 5.6 Exercise Higher Order Functions

/*
const multiply = function (num1) {
	return function (num2) {
		return num1 * num2
	}
}
*/

/*
const multiply = num1 => num2 => num1 * num2

multiplyBy(4)(6)
*/
// const multiplyByTwo = multiplyBy(2)
// const multiplyByFive = multiplyBy(5)
// console.log(multiplyByTwo(4))
// console.log(multiplyByTwo(10))
// console.log(multiplyByFive(6))

///////////////////////
// 5.7 Closures

/*
function a() {
	let grandpa = 'grandpa'
	return function b() {
		let father = 'father'
		return function c() {
			let son = 'son'
			return `${grandpa} > ${father} > ${son}`
		}
	}
}

console.log(a())
console.log(a()())
console.log(a()()())

const one = a()
// b()
*/

/*
function boo(string) {
	return function (name) {
		return function (name2) {
			console.log(`${string} ${name} ${name2}`)
		}
	}
}
*/

/*
const boo = string => name => name2 => console.log(`${string} ${name} ${name2}`)

// console.log(boo('hi')('tim')('becca'))

const booString = boo('hi')
// 5 years
const booStringName = booString()
*/

///////////////////////
// 5.6 Exercise Higher Order Functions

// Exercise
/*
function callMeMaybe() {
	const callMe = 'Hi! I am now here!'
	setTimeout(function () {
		console.log(callMe)
	}, 4000)
}

console.log(callMeMaybe())
*/

/*
function callMeMaybe() {
	setTimeout(function () {
		console.log(callMe)
	}, 4000)
	const callMe = 'Hi! I am now here!'
}

console.log(callMeMaybe())
*/

///////////////////////
// 5.9 Closures and Memory

// Memory efficient
/*
function heavyDuty() {
	const bigArray = new Array(7000).fill('hi')
	return bigArray
}

console.log(heavyDuty())
*/

/*
function heavyDuty(index) {
	const bigArray = new Array(7000).fill('hi')
	console.log('created!')
	return bigArray[index]
}

console.log(heavyDuty(688))
console.log(heavyDuty(688))
console.log(heavyDuty(688))
// console.log(heavyDuty(688))
const getHeavyDuty = heavyDuty2()
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2(index) {
	const bigArray = new Array(7000).fill('hi')
	console.log('created! Again!')
	return function (index) {
		return bigArray[index]
	}
}
*/

// Encapsulation
/*
const makeNuclearButton = () => {
	let timeWithoutDestruction = 0
	const passTime = () => timeWithoutDestruction++
	const totalPeaceTime = () => timeWithoutDestruction
	const launch = () => {
		timeWithoutDestruction = -1
		;('boom')
	}
	setInterval(passTime, 1000)
	return {
		launch: launch,
		totalPeaceTime: totalPeaceTime,
	}
}

const ohno = makeNuclearButton()
ohno.totalPeaceTime()
*/

/*
const makeNuclearButton = () => {
	let timeWithoutDestruction = 0
	const passTime = () => timeWithoutDestruction++
	const totalPeaceTime = () => timeWithoutDestruction
	const launch = () => {
		timeWithoutDestruction = -1
		;('boom')
	}
	setInterval(passTime, 1000)
	return {
		totalPeaceTime: totalPeaceTime,
	}
}

const ohno = makeNuclearButton()
ohno.passTime()
*/

///////////////////////
// 5.11 Exercise Closures 2

/*
let view
function initialize() {
	view = 'mountain'
	console.log('view has been set!')
}

initialize()
initialize()
initialize()
console.log(view)
*/

///////////////////////
// 5.12 Solution Closures 2

/*
let view
function initialize() {
	let called = 0
	return function () {
		if (called > 0) {
			return
		} else {
			view = 'mountain'
			called++
			console.log('view has been set!')
		}
	}
}

const startOnce = initialize()
startOnce()
startOnce()
startOnce()
console.log(view)
*/

///////////////////////
// 5.13 Exercise Closures 3

/*
const array = [1, 2, 3, 4]
for (var i = 0; i < array.length; i++) {
	setTimeout(function () {
		console.log('I am at index ' + i)
	}, 3000)
}
*/

///////////////////////
// 5.13 Solution Closures 3

/*
const array = [1, 2, 3, 4]
for (let i = 0; i < array.length; i++) {
		setTimeout(function () {
			console.log('I am at index ' + array[i])
		}, 3000)
}
*/

/*
const array = [1, 2, 3, 4]
for (let i = 0; i < array.length; i++) {
	;(function (closureI) {
		setTimeout(function () {
			console.log('I am at index ' + array[closureI])
		}, 3000)
	})(i)
}
*/

///////////////////////
// 5.17 Prototypal Inheritance 2

/*
let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name}, tha breather of fire`
		}
	},
}

// console.log(drsagon.sing())

let lizard = {
	name: 'Kiki',
	fight() {
		return 1
	},
}

// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())

lizard.__proto__ = dragon
// console.log(lizard.sing())
// console.log(lizard.fight())
// console.log(lizard.dance())
// console.log(dragon.__proto__)
console.log(dragon.isPrototypeOf(lizard))
*/

///////////////////////
// 5.17 Prototypal Inheritance 2

/*
let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name}, tha breather of fire`
		}
	},
}

let lizard = {
	name: 'Kiki',
	fight() {
		return 1
	},
}

lizard.__proto__ = dragon
for (let prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		console.log(prop)
	}
}
*/

///////////////////////
// 5.19 Prototypal Inheritance 4

///////////////////////
// 5.20 Prototypal Inheritance 5

/*
let human = {
	mortal: true,
}

let socrates = Object.create(human)
socrates.age = 45
// console.log(socrates.mortal)
console.log(human.isPrototypeOf(socrates))
*/

///////////////////////
// 5.21 Prototypal Inheritance 6

///////////////////////
// 5.22 Exercise Prototypal Inheritance"

/*
// Exercise - extend the functionality of a builtin object

// #1
// Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
// '1899'

// #Bonus
// Modify .map() to print 'map' at the end of each item.
console.log([1, 2, 3].map())
// 1map, 2map, 3map
*/

///////////////////////
// 5.23 Solution Prototypal Inheritance"

/*
// Exercise - extend the functionality of a builtin object

// #1
// Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

// Date.prototype.lastYear = function () {
// 	return this.getFullYear() - 1
// }

// Date.prototype.lastYear = () => {
// 	console.log(this)
// 	return this.getFullYear() - 1
// }

Date.prototype.lastYear = function () {
	return this.getFullYear() - 1
}
// console.log(new Date('1900-10-10').lastYear())
// console.log(new Date().lastYear())
console.log(new Date('1988-10-10').lastYear())
// '1899'

// #Bonus
// Modify .map() to print 'map' at the end of each item.
Array.prototype.map = function () {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		arr.push(this[i] + 'map')
	}
	return arr
}
console.log([1, 2, 3].map())
// 1map, 2map, 3map
*/

///////////////////////
// 6.4 OOP1 Factory Functions

/*
const elf = {
	name: 'Orwell',
	weapon: 'bow',
	attack() {
		return 'attack with ' + elf.weapon
	},
}

console.log(elf.name)
console.log(elf.attack())

const elf2 = {
	name: 'Sally',
	weapon: 'bow',
	attack() {
		return 'attack with ' + elf.weapon
	},
}

console.log(elf2.attack())
*/

// Factory Functions
/*
function createElf(name, weapon) {
	return {
		name: name,
		weapon: weapon,
		attack() {
			return 'attack with ' + weapon
		},
	}
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
*/

/*
function createElf(name, weapon) {
	return {
		name,
		weapon,
		attack() {
			return 'attack with ' + weapon
		},
	}
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())
*/

///////////////////////
// 6.5 OOP2 Object.create()

/*
const elfFunctions = {
	attack() {
		return 'attack with ' + this.weapon
	},
}
function createElf(name, weapon) {
	return {
		name,
		weapon,
	}
}

const peter = createElf('Peter', 'stones')
peter.attack = elfFunctions.attack
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
sam.attack = elfFunctions.attack
console.log(sam.attack())
*/

/*
// Object.create()
const elfFunctions = {
	attack() {
		return 'attack with ' + this.weapon
	},
}
function createElf(name, weapon) {
	let newElf = Object.create(elfFunctions)
	console.log(newElf.__proto__)
	;(newElf.nme = name), (newElf.weapon = weapon)
	return newElf
}

const peter = createElf('Peter', 'stones')
console.log(peter.attack())
const sam = createElf('Sam', 'fire')
console.log(sam.attack())
*/

///////////////////////
// 6.6 OOP3 Constructor functions

/*
// Constructor Functions
function Elf(name, weapon) {
	this.name = name
	this.weapon = weapon
}

// Elf.prototype.attack = function () {
// 	return 'attack with ' + this.weapon
// }

Elf.prototype.attack = function () {
	return 'attack with ' + this.weapon
}

// Elf.prototype.build = function () {
// 	return 'attack with ' + this.weapon
// }

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
// console.log(sam.name)
console.log(sam.attack())
// console.log(sam.attack())

// const Elf1 = new Function(
// 	'name',
// 	'weapon',
// 	`this.name = name
// 	this.name = weapon`
// )

// const sarah = new Elf1('Sarah', 'fireworks')
// console.log(sarah)
*/

///////////////////////
// 6.7 More Constructor Functions
/*
// Constructor Functions
function Elf(name, weapon) {
	this.name = name
	this.weapon = weapon
	var a = 5
	console.log('this', this)
}

Elf.prototype.attack = function () {
	return 'attack with ' + this.weapon
}

// Elf.prototype.build = function () {
// 	const self = this
// 	function building() {
// 		return self.name + ' builds a house'
// 	}
// 	return building
// }

const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
// console.log(peter.build()())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())
*/

///////////////////////
// 6.8 Funny Thing About JS

/*
var a = new Number(5)

console.log(a)
console.log(typeof a)
var b = 5
console.log(typeof b)
console.log(a === b)
console.log(a == b)

// null and undefined
*/

///////////////////////
// 6.9 OOP4 ES6 Classes
/*
// ES6 Classes
Class Elf {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return 'attack with ' + this.weapon
	}
}

const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf);
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())
*/

///////////////////////
// 6.10 Object.create vs Class

/*
Object.create()
// ES6 Classes
Class Elf {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return 'attack with ' + this.weapon
	}
}

const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf);
console.log(peter.attack())
const sam = new Elf('Sam', 'fire')
console.log(sam.attack())
*/

///////////////////////
// 6.10 Object.create vs Class

/*
// new binding this
function Person(name, age) {
	this.name = name
	this.age = age
}

const person1 = new Person('Xavier', 55)
person1

// implicit binding
const person = {
	name: 'Karen',
	age: 40,
	hi() {
		console.log('hi' + this.name)
	},
}

// explicit binding
const person3 = {
	name: 'Karen',
	age: 40,
	hi: function () {
		console.log('hi' + this.setTimeout)
	}.bind(window),
}

console.log(person3.hi())

// arrow function
const person4 = {
	name: 'karen',
	age: 40,
	hi: function () {
		var inner = () => {
			console.log('hi ' + this.name)
		}
		return inner()
	},
}

console.log(person4.hi())
*/

///////////////////////
// 6.12 Inheritance

/*
class Character {
	constructor(name, weapon) {
		this.name = name
		this.weapon = weapon
	}
	attack() {
		return 'attack with ' + this.weapon
	}
}

class Elf extends Character {
	constructor(name, weapon, type) {
		super(name, weapon)
		this.type = type
		console.log(this)
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon)
		this.color = color
	}
	makeFort() {
		return 'strongest fort in the world made'
	}
}

// const fiona = new Elf('Fiona', 'ninja stars')
const dolby = new Elf('Dolby', 'cloth', 'house')
// console.log(fiona)
// const ogre = { ...fiona }
// console.log(ogre)
// console.log(ogre.__proto__)
// console.log(fiona.__proto__)
// console.log(fiona === ogre)
// console.log(ogre.attack())
// console.log(fiona)
// console.log(dolby)
console.log(dolby.attack)
// console.log(dolby.makeFort())
const shrek = new Ogre('Shrek', 'club', 'green')
// console.log(shrek)
console.log(shrek.makeFort())

// console.log(Ogre.prototype.isPrototypeOf(shrek))
// console.log(Character.prototype.isPrototypeOf(Ogre.prototype))

console.log(dolby instanceof Elf)
console.log(dolby instanceof Ogre)
console.log(dolby instanceof Character)
*/

///////////////////////
// 6.14 Public vs Private

///////////////////////
// 7.3 Exercise Amazon
/*
// Amazon shopping
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
}

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// Bonus:
// accept refunds.
// Track user history
*/

///////////////////////
// 7.4 Pure Functions
/*
// no side effects
// input --> output

const array = [1, 2, 3]
function mutateArray(arr) {
	arr.pop()
}
function mutateArray2(arr) {
	arr.forEach(item => {
		arr.push(1)
	})
}
mutateArray(array)
mutateArray2(array)
console.log(array)
*/

///////////////////////
// 7.4 Pure Functions

// no side effects
// input --> output

/*
const array = [1, 2, 3]
function removeLastItem(arr) {
	const newArray = [].concat(arr)
	newArray.pop()
	return newArray
}
function multiplyBy2(arr) {
	return arr.map(item => item * 2)
}
const array2 = removeLastItem(array)
// mutateArray2(array)
const array3 = multiplyBy2(array)
console.log(array, array2, array3)
*/

/*
function a(num1, num2) {
	return num1 + num2
}

console.log(a(3, 4))

function b(num) {
	return num * 2
}

console.log(b(a(3, 4)))
console.log(b(7))
*/

///////////////////////
// 7.4 Idempotence

// indempotence
/*
function notGood(num) {
	return Math.random(num)
}

console.log(notGood(5))
*/

/*
function notGood(num) {
	console.log(num)
}

console.log(notGood(5))
*/
/*
console.log(Math.abs(-50))
console.log(Math.abs(Math.abs(-50)))
*/

///////////////////////
// 7.8 Imperative vs Declarative

/*
// Imperative vs Declarative
for (let i = 0; i < 1000; i++) {
	console.log(i)
}

;[1, 2, 3].forEach(item => console.log(item))
*/

///////////////////////
// 7.9 Immutability

/*
// Immutability
const obj = { name: 'Andrei' }
function clone(obj) {
	return { ...obj }
}

function updateName(obj) {
	const obj2 = clone(obj)
	obj2.name = 'Nana'
	return obj2
}
const updatedObj = updateName(obj)
// obj.name = 'Nana'
console.log(obj, updatedObj)
*/

///////////////////////
// 7.10 Higher Order Function and Closures
/*
// HOF
const hof = fn => fn(5)
console.log(
	hof(function a(x) {
		return x
	})
)
// Closures
const closure = function () {
	let count = 55
	return function getCounter() {
		count++
		return count
	}
}

const getCounter = closure()
console.log(getCounter())
console.log(getCounter())
console.log(getCounter())
*/

///////////////////////
// 7.11 Currying

/*
// currying
const multiply = (a, b) => a * b
// console.log(multiply(3, 4))
const curriedMultiply = a => b => a * b
// console.log(curriedMultiply(5, 3))
// console.log(curriedMultiply(5)(3))
const curriedMultiplyBy5 = curriedMultiply(5)

// 10 years
console.log(curriedMultiplyBy5(4))
console.log(curriedMultiplyBy5(4))
console.log(curriedMultiplyBy5(4))
*/

///////////////////////
// 7.12 Partial Application
/*
// Partial Application
const multiply = (a, b, c) => a * b * c
const curriedMultiplyBy5 = multiply.bind(null, 5)
console.log(curriedMultiplyBy5(4, 10))
*/

///////////////////////
// 7.14 MCI Memoization 1
/*
function addTo80(n) {
	console.log('long time')
	return n + 80
}

// console.log(addTo80(5))
// console.log(addTo80(5))
// console.log(addTo80(5))

let cache = {
	5: 85,
}
function memoizedAddTo80(n) {
	if (n in cache) {
		return cache[n]
	} else {
		console.log('long time')
		cache[n] = n + 80
		return cache[n]
	}
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(6))
*/

///////////////////////
// 7.15 MCI Memoization 2

/*
function addTo80(n) {
	console.log('long time')
	return n + 80
}

function memoizedAddTo80() {
	let cache = {}
	return function (n) {}
	if (n in cache) {
		return cache[n]
	} else {
		console.log('long time')
		cache[n] = n + 80
		return cache[n]
	}
}
const memoized = memoizedAddTo80()

console.log('1', memoized(5))
console.log('2', memoized(5))
*/

///////////////////////
// 7.16 Compose and Pipe
/*
fn1(fn3(fn3(50)))
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)
// Compose
// Pipe
// data --> fn --> data --> fn -->

const compose = (f, g) => data => f(g(data))
const pipe = (f, g) => data => g(f(data))
const multiplyBy3 = num => num * 3
const makePositive = num => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))
*/

///////////////////////
// 7.17 Arity
/*
// arity

fn1(fn3(fn3(50)))
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)
// Compose
// Pipe
// data --> fn --> data --> fn -->

const compose = (f, g) => data => f(g(data))
const pipe = (f, g) => data => g(f(data))
const multiplyBy3 = num => num * 3
const makePositive = num => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))
*/

///////////////////////
// 7.19 Solution Amazon
/*
// Amazon shopping
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
}
let amazonHistory = []
const compose = (f, g) => (...args) => f(g(...args))

purchaseItem(
	emptyCart,
	buyItem,
	applyTaxToItems,
	addItemToCart
)(user, { name: 'laptop', price: 200 })

function purchaseItem(...fns) {
	return fns.reduce(compose)
}

function addItemToCart(user, item) {
	amazonHistory.push(user)
	const updateCart = user.cart.concat(item)
	return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
	amazonHistory.push(user)
	const { cart } = user
	const taxRate = 1.3
	const updateCart = cart.map(item => {
		return {
			name: item.name,
			price: item.price * taxRate,
		}
	})
	return Object.assign({}, user, { cart: updateCart })
}

function buyItem(user) {
	amazonHistory.push(user)
	return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
	amazonHistory.push(user)
	return Object.assign({}, user, { cart: [] })
}
*/

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

/*
{
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [ { name: 'laptop', price: 260 } ]
}
*/

// function refundItem() {}

/*
amazonHistory
*/

/*
[
  { name: 'Kim', active: true, cart: [], purchases: [] },
  { name: 'Kim', active: true, cart: [ [Object] ], purchases: [] },
  { name: 'Kim', active: true, cart: [ [Object] ], purchases: [] },
  {
    name: 'Kim',
    active: true,
    cart: [ [Object] ],
    purchases: [ [Object] ]
  }
]
*/

// function getUserState() {}
// function goForward() {}

///////////////////////////////
// Amazon shopping
/*
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
}
let amazonHistory = []
const pipe = (f, g) => (...args) => g(f(...args))

purchaseItem(
	emptyCart,
	buyItem,
	applyTaxToItems,
	addItemToCart
)(user, { name: 'laptop', price: 200 })

function purchaseItem(...fns) {
	return fns.reduce(pipe)
}

function addItemToCart(user, item) {
	amazonHistory.push(user)
	const updateCart = user.cart.concat(item)
	return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItems(user) {
	amazonHistory.push(user)
	const { cart } = user
	const taxRate = 1.3
	const updateCart = cart.map(item => {
		return {
			name: item.name,
			price: item.price * taxRate,
		}
	})
	return Object.assign({}, user, { cart: updateCart })
}

function buyItem(user) {
	amazonHistory.push(user)
	return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
	amazonHistory.push(user)
	return Object.assign({}, user, { cart: [] })
}
*/
// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

/*
{
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [ { name: 'laptop', price: 260 } ]
}
*/

// function refundItem() {}

// amazonHistory

/*
[
  { name: 'Kim', active: true, cart: [], purchases: [] },
  { name: 'Kim', active: true, cart: [ [Object] ], purchases: [] },
  { name: 'Kim', active: true, cart: [ [Object] ], purchases: [] },
  {
    name: 'Kim',
    active: true,
    cart: [ [Object] ],
    purchases: [ [Object] ]
  }
]
*/

// function getUserState() {}
// function goForward() {}

///////////////////////////////
// 7.20 Reviewing FP

///////////////////////////////
// 8.1 Composition vs Inheritance

///////////////////////////////
// 8.2 OOP vs FP

///////////////////////////////
// 8.3 OOP vs FP 2

///////////////////////////////
// 9.4 Promises
/*
const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('stuff worked')
	} else {
		reject('Error, it broke')
	}
})
*/

// promise.then(result => console.log(result))

// Chaining Promises
/*
promise
	.then(result => {
		throw Error
		return result + '!'
	})
	.then(result2 => {
		console.log(result2)
	})
	.catch(() => console.log('errroor!'))
*/

/*
const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4]).then(values => {
	console.log(values)
})

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('errroor!'))
	.then(result3 => {
		console.log(result3 + '!')
	})
*/

/*
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(
	urls.map(url => {
		return fetch(url).then(resp => resp.json())
	})
)
	.then(results => {
		console.log(results[0])
		console.log(results[1])
		console.log(results[2])
	})
	.catch(() => console.log('error'))
*/

///////////////////////////////
// 9.5 ES8 – Async Await
/*
movePlayer(100, 'Left')
	.then(() => movePlayer(400, 'Left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePlayer(330, 'Left'))

async function playerStart() {
	const first = await movePlayer(100, 'Left') // pause
	const second = await movePlayer(400, 'Left') // pause
	await movePlayer(10, 'Left') // pause
	await movePlayer(330, 'Left') // pause
}
*/

/*
fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(console.log())

async function fetchUsers() {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json()
	console.log(data)
}
*/

/*
const urls = [
	'https://jsonplaceholde.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
	.then(array => {
		console.log('users', array[0])
		console.log('posts', array[1])
		console.log('albums', array[2])
	})
	.catch('oops')

const getData1 = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map(url => fetch(url).then(resp => resp.json())),
			console.log('users', users),
			console.log('posts', posts),
			console.log('albums', albums)
		)
	} catch (err) {
		console.log('oops', err)
	}
}
*/

///////////////////////////////
// 9.6 ES9 (ES2018)
/*
// Object Spread Operator
const animals = {
	tiger: 23,
	lion: 5,
	monkey: 2,
	bird: 40,
}
*/
/*
const array = [1, 2, 3, 4, 5]
function sum(a, b, c, d, e) {
	return a + b + c + d + e
}
*/
/*
function objectSpread(p1, p2, p3) {
	console.log(p1)
	console.log(p2)
	console.log(p3)
}

const { tiger, lion, ...rest } = animals

objectSpread(tiger, lion, rest)
*/
///////////////////////////////
// 9.7 ES6 (ES2018)
// finally
/*
const urls = [
	'https://swapi.co/api/people/1',
	'https://swapi.co/api/people/2',
	'https://swapi.co/api/people/3',
	'https://swapi.co/api/people/4',
]

Promise.all(
	urls.map(url => {
		return fetch(url).then(people => people.json())
	})
)
	.then(array => {
		throw Error
		console.log('1', array[0])
		console.log('2', array[1])
		console.log('3', array[2])
		console.log('4', array[3])
	})
	.catch(err => console.log('ughhhh fix it!', err))
	.finally(() => console.log('extra'))
*/

// for await of
/*
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/postss',
	'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map(url => fetch(url).then(resp => resp.json())),
			console.log('users', users),
			console.log('posts', posts),
			console.log('albums', albums)
		)
	} catch (err) {
		console.log('oops', err)
	}
}
*/
/*
const loopThroughUrls = url => {
	for (url of urls) {
		console.log(url)
	}
}
console.log(loopThroughUrls(urls))
*/
/*
const getData2 = async function () {
	const arrayOfPromises = urls.map(url => fetch(url))
	for await (let request of arrayOfPromises) {
		const data = await request.json()
		console.log(data)
	}
}
*/

///////////////////////////////
// 9.9 Parallel, Sequence and Race

// 3
// parallel
// sequencial
// race

/*
const promisify = (item, delay) =>
	new Promise(resolve => setTimeout(() => resolve(item), delay))

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 3000)
// console.log(a(), b(), c())
async function parallel() {
	const promises = [a(), b(), c()]
	const [output1, output2, output3] = await Promise.all(promises)
	return `parallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
	const promises = [a(), b(), c()]
	const output1 = await Promise.race(promises)
	return `race is done: ${output1}`
}

async function sequence() {
	const output1 = await a()
	const output2 = await b()
	const output3 = await c()
	return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
*/

///////////////////////////////
// 9.10 Threads, Concurrency and Parallelism

/*
var worker = new Worker('worker.js')
worker.postMessage('Hellloooo')

addEventListener('message')
*/

// fetch()

/*
const { spawn } = require('child_process')

spawn('git', ['stuff'])
*/

///////////////////////////////
// 10. Modules in Javascript
///////////////////////////////
// 10.1 Section Overview
///////////////////////////////
// 10.2 What is a Module
/*
user = {}
function signin(user) {
	var textfield = 'hehehe'
}

function isHuman(user) {
	// ...
}

// tight coupling
*/

/*
var harry = 'potter'
var voldemort = 'He who must not be named'

function fight(char1, char2) {
	var attack1 = Math.floor(Math.random() * char1.length)
	var attack2 = Math.floor(Math.random() * char2.length)
	console.log(attack1)
	return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}

console.log(fight(harry, voldemort))
*/

///////////////////////////////
// 10.3 Module Pattern

// Global Scope
//   //Module Scope
//   //   // Function Scope
//   //   //   // Block Scope - let and const

// IIFE
// Module Pattern
/*
var fightModule = (function () {
	var harry = 'potter'
	var voldemort = 'He who must not be named'

	function fight(char1, char2) {
		var attack1 = Math.floor(Math.random() * char1.length)
		var attack2 = Math.floor(Math.random() * char2.length)
		console.log(attack1)
		return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
	}
	// console.log(fight(harry, voldemort))
	return {
		fight: fight,
	}
})()
*/

///////////////////////////////
// 10.4 Module Pattern Pros and Cons

///////////////////////////////
// 10.5 Common JS, AMD, UMD
// CommonJS and AMD Asynchronous Module Definition

/*
var module1 = require('module1') //.fight;
var module2 = require('module2') //.importedFunc2

function fight() {}

module1.exports = {
	fight: fight,
}

// AMD

define(['module1', 'module2'], function (module1Import, module2Import) {
	var module1 = module1Import //.fight;
	var module2 = module2Import //.importedFunc2

	function dance() {}

	return {
		dance: dance,
	}
})
*/

///////////////////////////////
// 10.6 ES6 Modules

/*
import module1 from 'module1' // {fight}
import module2 from 'module2'
*/

/*
const harry = 'potter'
const voldemort = 'He who must not be named'

export function jump() {
	console.log('jump')
}

export default function fight(char1, char2) {
	const attack1 = Math.floor(Math.random() * char1.length)
	const attack2 = Math.floor(Math.random() * char2.length)
	return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
*/

///////////////////////////////
// 10.7 Section Review

///////////////////////////////
// 11.Error Handling

///////////////////////////////
// 11.1 Section Overview

///////////////////////////////
// 11.2 Errors in Javascript

///////////////////////////////
// 11.3 try Catch
/*
try {
} catch {}
*/
/*
catch()
*/

/*
function fail() {
	try {
		throw new Error('oopsie!!!')
		console.log('this works')
	} catch (error) {
		// console.log('we have made an oopsie', error)
		// console.log(error.name)
		// con/sole.log(error.stack)
		console.log(error.message)
	} finally {
		console.log('still good')
		return 'returning fail'
	}
	console.log('!!!!!!!!!!!!:)')
}

console.log(fail())
*/

/*
try {
	try {
		something()
	} catch (e) {
		throw new Error(e)
	}
} catch (e) {
	console.log('got it', err)
}
*/

/*
var fakevariable = true

try {
	setTimeout(function () {
		fakevariable
	}, 1000)
} catch (e) {
	console.log('got it', e)
}
*/

///////////////////////////////
// 11.3 try Catch

/*
var fakevariable = true

try {
	setTimeout(function () {
		fakevariable
	}, 1000)
} catch (e) {
	console.log('got it', e)
}
*/

// .catch()

/*
Promise.resolve('asyncfail')
	.then(response => {
		// console.log(response)
		throw new Error('#1 fail')
		return response
	})
	.then(response => {
		console.log(response)
	})
	.catch(err => {
		// console.log(err)
		// return err
		throw new Error('#2')
	})
	.then(response => {
		console.log(response.message)
	})
	.catch(err => {
		console.log('final error')
	})
	*/

/*
Promise.resolve('asyncfail')
	.then(response => {
		throw new Error('#1 fail')
		return response
	})
	.then(response => {
		console.log(response)
	})
*/

/*
Promise.resolve('asyncfail')
	.then(response => {
		Promise.resolve()
			.then(() => {
				throw new Error('#3 fail')
			})
			.catch(console.log)
		return 5
	})
	.then(response => {
		console.log(response)
	})
	.catch(err => {
		console.log('final error', err)
	})
*/

// async await

///////////////////////////////
// 11.5 Async Error Handling 2
/*
;(async function () {
	try {
		await Promise.resolve('oopsie #1')
		await Promise.reject('oopsie #2')
	} catch (err) {
		console.log(err)
	}
	console.log('is this still good?')
})()
*/
/*
;(async function () {
	await Promise.resolve('oopsie #1')
	await Promise.reject('oopsie #2')
	console.log('is this still good?')
})()
*/
///////////////////////////////
// 11.6 Extending Errors
/*
class AuthenticationError extends Error {
	constructor(message) {
		super(message)
		this.name = 'AuthenticationError'
		this.favouriteSnack = 'grapes'
	}
}
class DataBaseError extends Error {
	constructor(message) {
		super(message)
		this.name = 'DataBaseError'
		this.message = 'grapes'
	}
}
class PermissionError extends Error {
	constructor(message) {
		super(message)
		this.name = 'PermissionError'
		this.favouriteSnack = 'grapes'
	}
}

const a = new DataBaseError('oopsie')
// console.log(a.message)
console.log(a instanceof DataBaseError)
*/

///////////////////////////////
// 11.8 Section Review

///////////////////////////////
// 14. Appendix I Javascript Basics

///////////////////////////////
// 14.3. Your First Javascript

// JAVASCRIPT TYPES

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (new in ECMAscript 6)

// JAVASCRIPT VARIABLES

// var
// let (new in ECCMAScript 6)
// const (new in ECMAScript 6)

// JAVASCRIPT CONDITIONALS

// if
// else
// else if
// ternary operator
// switch

// JAVASCRIPT LOGICAL OPERATORS

// &&
// ||
// !

// JAVASCRIPT FUNCTIONS

// var a = function name() {}
// function name() {}
// return
// () => (new in ecMAScript 6)

// JAVASCRIPT DATA STRUCTURES

// Array
// Object

// JAVASCRIPT LOOPING

// for
// while
// do
// forEach (new in ECMAScript 5)

///////////////////////////////
// 14.4 Variables
/*
var george = 'These pretzels are making me thirsty' + '!'
console.log(george)

// var 3 = 3

// var three = 3

// var firstName

// console.log(prompt('What is your username'))

var first = prompt('enter first number')
var second = prompt('enter second number')
// console.log(first)
// console.log(second)

// console.log(Number(first))
// var sum = Number(first) + Number(second)

// console.log(sum)
// alert('hi there!')
var sum = Number(first) + Number(second)
// alert(sum)
alert('The sum is:' + sum)
*/

/*
var a = true
console.log(a)
a = 'Hello'
console.log(a)
var b
console.log(b)
var password
*/

///////////////////////////////
// 14.5 Control Flow
/*
var name = 'Billy'
if (name === 'Billy') {
	alert('hi Billy')
}

name = 'Susy'
if (name === 'Billy') {
	alert('hi Billy')
}

if (name === 'Billy') {
	alert('hi Billy')
} else {
	alert('hmmm I dont know you')
}

name = 'Billy'

if (name === 'Billy') {
	alert('hi Billy')
} else {
	alert('hmmm I dont know you')
}
*/

/*
name = 'Susy'

if (name === 'Billy') {
	alert('hi Billy')
} else if (name === 'Susy') {
	alert('hi Susy!')
} else {
	alert('I dont know you')
}
*/

/*
// name = 'Billy'
name = 'Ann'

if (name === 'Billy' || name === 'Ann') {
	alert('Hi Billy or Ann')
}
*/

/*
name = 'Ann'

if (name === 'Billy' && name === 'Ann') {
	alert('Hi Billy or Ann')
}
*/

/*
var firstName = 'Bob'
var lastName = 'Smith'
var lastName = 'Jones'

if (firstName === 'Bob' && lastName === 'Smith') {
	alert('hi Bob Smith')
}
*/

/*
if (!(name === 'Bob')) {
	alert('Hi Bob')
}

console.log(!true)
console.log(!false)
*/

///////////////////////////////
// 14.6 Javascript in Our Website

/*
4 + 3

if (4 + 3 === 7) {
	alert('You´re smart!')
}
*/

///////////////////////////////
// 14.7 Functions
// alert()
// prompt()

// console.log('Hellooooo', 'How are you')
/*
function sayHello() {
	console.log('Hello')
}

sayHello()

var sayBye = function () {
	console.log('Bye')
}

console.log(sayBye())
*/

/*
function sing() {
	console.log('AHHHHHHHH')
	console.log('TEEEEEEEE')
}

console.log(sing())

function sing2() {
	console.log('laaa deee daaa')
	console.log('laaaaaaaaaaaaa')
}

console.log(sing2())
*/

/*
function sing(song) {
	console.log(song)
}

console.log(sing('Laaa deee daaa'))
console.log(sing('helloooooooo'))
console.log(sing('backstreets back alright'))
*/
/*
function multiply(a, b) {
	if (a > 10 || b > 10) {
		return 'that´s too hard'
	} else {
		return a * b
	}
}

console.log(multiply(5, 40))
*/

/*
var a = function (a, b) {
	if (a > 10 || b > 10) {
		return 'that´s too hard'
	} else {
		return a * b
	}
}

console.log(a())
*/
/*
function multiply(a, b) {
	return a * b
}

alert(multiply(3, 4))
*/
/*
function multiply(a, b) {
	return a * b
}

var total = multiply(4, 5)
alert(total)

parameters
arguments
*/

///////////////////////
// 5.8 Data Structures Arrays
/*
var list = ['tiger', 'cat', 'bear', 'bird']
console.log(list[1])

var numbers = [1, 2, 3, 4]

var booleans = [true, false, true]

var functionList = [
	function apple() {
		console.log('apple')
	},
]

console.log(functionList)

var mixedList = [
	'apples',
	3,
	undefined,
	true,
	function apple() {
		console.log('apples')
	},
]

console.log(mixedList)

var list = [['tiger', 'cat', 'bear', 'bird']]

console.log(list[0])
console.log(list)
console.log(list[0][2])
*/
/*
var list = ['tiger', 'cat', 'bear', 'bird']

console.log(list)
console.log(list.shift())
console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.push('elephant'))
console.log(list)
console.log(list.concat(['bee', 'deer']))

console.log(list.sort())

var myList = ['cat', 'bear', 'elephant', 'bee', 'deer']
var myNewList = myList.concat(['monkey'])
console.log(myList)
console.log(myNewList)

Array Methods
Method 	Description
concat() 	Joins two or more arrays, and returns a copy of the joined arrays
copyWithin() 	Copies array elements within the array, to and from specified positions
entries() 	Returns a key/value pair Array Iteration Object
every() 	Checks if every element in an array pass a test
fill() 	Fill the elements in an array with a static value
filter() 	Creates a new array with every element in an array that pass a test
find() 	Returns the value of the first element in an array that pass a test
findIndex() 	Returns the index of the first element in an array that pass a test
forEach() 	Calls a function for each array element
from() 	Creates an array from an object
includes() 	Check if an array contains the specified element
indexOf() 	Search the array for an element and returns its position
isArray() 	Checks whether an object is an array
join() 	Joins all elements of an array into a string
keys() 	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf() 	Search the array for an element, starting at the end, and returns its position
map() 	Creates a new array with the result of calling a function for each array element
pop() 	Removes the last element of an array, and returns that element
push() 	Adds new elements to the end of an array, and returns the new length
reduce() 	Reduce the values of an array to a single value (going left-to-right)
reduceRight() 	Reduce the values of an array to a single value (going right-to-left)
reverse() 	Reverses the order of the elements in an array
shift() 	Removes the first element of an array, and returns that element
slice() 	Selects a part of an array, and returns the new array
some() 	Checks if any of the elements in an array pass a test
sort() 	Sorts the elements of an array
splice() 	Adds/Removes elements from an array
toString() 	Converts an array to a string, and returns the result
unshift() 	Adds new elements to the beginning of an array, and returns the new length
valueOf() 	Returns the primitive value of an array
*/

///////////////////////
// 14.9 Data Structures Objects
/*
var user = {
	name: 'John',
	age: 34,
	hobby: 'Soccer',
	isMarried: false,
}

console.log(user)

var list = ['apple', 'banana', 'orange']

console.log(list)

console.log(list[1])
console.log(user.name)
console.log(user.age)
console.log(user.hobby)
console.log(user.isMarried)
*/
// list.pop()
// list.push()
// list.concat()
/*
user.favouriteFood = 'spinach'
console.log(user)
user.isMarried = true
console.log(user)
*/
/*
var user = {
	0: 'John',
	1: 34,
	2: 'Soccer',
	3: false,
}
*/
/*
var user = {
	name: 'John',
	age: 34,
	hobby: 'Soccer',
	isMarried: false,
	spells: ['abrakadabra', 'shazam', 'boo'],
	shout: function () {
		console.log('AHHHHH!')
	},
}

var list = [
	{
		username: 'andy',
		password: 'secret',
	},
	{
		username: 'jess',
		password: '123',
	},
]
*/
/*
console.log(list)

console.log(user.spells)
console.log(user.spells[1])

console.log(list[0].password)
*/

/*
console.log(user)
console.log(user.shout())
list.pop()
console.log(console)
console.info('hello')
console.error('ahhh')
user2 = {}
console.log(user2)
list2 = []
console.log(list2)
console.log(list2[0])
*/

/*
var emptyObj = {}
var nullObj = null
console.log(emptyObj)
console.log(nullObj)
nullObj.name = 'Andy'
emptyObj.name = 'Andy'
*/

///////////////////////
// 14.10 Exercise Build Facebook
/*
var database = [
	{
		username: 'andrei',
		password: 'supersecret',
	},
]

var newsFeed = [
	{
		username: 'Bobby',
		timeline: 'So tired from all that learning!',
	},
	{
		username: 'Sally',
		timeline: 'Javascript is soooo coool!',
	},
]

var userNamePrompt = prompt('What´s your username?')
var passwordPrompt = prompt('What´s your password?')

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed)
	} else {
		alert('Sorry, wrong username and password!')
	}
}

console.log(signIn(userNamePrompt, passwordPrompt))
*/

///////////////////////
// 14.11 Javascript Terminology

// function declaration
// function newFunction() {}

// function expression
/*
var newFunction = function name() {

}
*/
// var newFunction = function () {}

// expression
// 1 + 3
// var a = 2
// return true

//calling or invoking a functiion
// alert()
// newFunction(param1, param2)

//assign a variable
// var a = true

// function vs method
/*
function thisIsAFunction() {}

var obj = {
	thisIsAMethod: function () {},
}

thisIsAFunction()
obj.thisIsAMethod()
*/

///////////////////////
// 14.12 Loops

// var todos = [
// 	'clean room',
// 	'brush teeth',
// 	'exercise',
// 	'study javascript',
// 	'eat healthy',
// ]

// var todosImportant = [
// 	'clean room!',
// 	'brush teeth!',
// 	'exercise!',
// 	'study javascript!',
// 	'eat healthy!',
// ]

/*
for (var i = 0; i < todos.length; i++) {
	console.log(i)
}
*/
// console.log(todos.length)

/*
for (var i = 0; i < todos.length; i++) {
	console.log(todos[i] + '!')
}
*/

/*
for (var i = 0; i < todos.length; i++) {
	todos[i] = todos[i] + '!'
}

console.log(todos)
*/
// var todosLength = todos.length
// for (var i = 0; i < todosLength; i++) {
// 	console.log(todos[i])
// }

// todos.forEach(function (todo, i) {
// 	console.log(todo, i)
// })

// function logTodos(todo, i) {
// 	console.log(todo, i)
// }

// todos.forEach(logTodos)
// todosImportant.forEach(logTodos)

/*
var counterOne = 0
while (counterOne < 10) {
	console.log(counterOne)
	counterOne++
}
*/

/*
var counterOne = 10
while (counterOne > 0) {
	console.log('while', counterOne)
	counterOne--
}

var counterTwo = 10
do {
	console.log('do while', counterTwo)
	counterTwo--
} while (counterTwo > 0)
*/

///////////////////////
// 14.13 Exercise Build Facebook 2
/*
var database = [
	{
		username: 'andrei',
		password: 'supersecret',
	},
	{
		username: 'sally',
		password: '123',
	},
	{
		username: 'ingrid',
		password: '777',
	},
]

var newsfeed = [
	{
		username: 'Bobby',
		timeline: 'So tired from all that learning!',
	},
	{
		username: 'Sally',
		timeline: 'Javascript is sooooo cool!',
	},
	{
		username: 'Mitch',
		timeline: 'Javascript is sooooo cool!',
	},
]

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (
			database[i].username === username &&
			database[i].password === password
		) {
			return true
		}
	}
	return false
}

function sigIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed)
	} else {
		alert('Sorry, wrong username and password')
	}
}

var userNamePrompt = prompt("what's your username?")
var passwordPrompt = prompt("What's your password")

sigIn(userNamePrompt, passwordPrompt)
*/

///////////////////////
// 14.14 Javascript keyword

// JAVASCRIPT KEYWORDS
/*
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
finally
for
function
if
import
in
instanceof
new
return
super
switch
this
throw
try
typeof
var
void
while
with
yield
*/

///////////////////////
// 15.2 Scope

// function aa() {
// 	console.log('test')
// }

// window.aa()
/*
var b = 'Can I access this?'
function bb() {
	var a = 'hello'
}
*/

// Root Scope (window)
/*
var fun = 5

function funFunction() {
	// child scope
	var fun = 'hellooo'
	console.log(1, fun)
}

function funerFunction() {
	// child scope
	var fun = 'Byee'
	console.log(2, fun)
}

function funestFunction() {
	// child scope
	fun = 'AHhHHHHH'
	console.log(3, fun)
}

console.log('window', fun)
funFunction()
funerFunction()
funestFunction()

console.log(fun)
*/

// var fun = 5
/*
function funestFunction() {
	// child scope
	console.log(fun)
}
*/

///////////////////////
// 15.3 Advanced Control Flow

// condition ? expr1 : expr2

/*
function isUserValid(bool) {
	return bool
}

var answer = isUserValid(false) ? 'You may enter' : 'Access Denied'

console.log(answer)
*/
/*
function isUserValid(bool) {
	return bool
}

var answer = isUserValid(true) ? 'You may enter' : 'Access Denied'

// console.log(answer)

var automatedAnswer =
	'Your account # is ' + isUserValid(false ? '12334' : 'not available')

console.log(automatedAnswer)
*/

/*
function isUserValid(bool) {
	return bool
}

var answer = isUserValid(true) ? 'You may enter' : 'Access Denied'

// var automatedAnswer =
// 	'Your account # is ' + isUserValid(true ? '12334' : 'not available')

// console.log(automatedAnswer)

function condition() {
	if (isUserValid(true)) {
		return 'You may enter'
	} else {
		return 'Access denied'
	}
}

var answer2 = condition()
*/

/*
function moveCommand(direction) {
	var whatHappens
	switch (direction) {
		case 'forward':
			whatHappens = 'you encounter a monster'
			break
		case 'back':
			whatHappens = 'you arrived home'
			break
		case 'right':
			whatHappens = 'you found a river'
			break
		case 'left':
			whatHappens = 'you run into a troll'
			break
		default:
			whatHappens = 'please enter a valid direction'
	}
	return whatHappens
}

console.log(moveCommand('forward'))
console.log(moveCommand('back'))
console.log(moveCommand('right'))
console.log(moveCommand('left'))
console.log(moveCommand('asDFGD'))
*/

///////////////////////
// 15.4 ES5 and ES6

// let const
/*
const player = 'bobby'
let experience = 100
let wizardLevel = false

if (experience > 90) {
	let wizardLevel = true
	console.log('inside', wizardLevel)
}

console.log('outside', wizardLevel)
*/
/*
const player = 'bobby'
let experience = 100
var wizardLevel = false

if (experience > 90) {
	var wizardLevel = true
	console.log('inside', wizardLevel)
}

console.log('outside', wizardLevel)
*/

// const player = 'bobby'
// let experience = 100
// let wizardLevel = false

// if (experience > 90) {
// 	let wizardLevel = true
// }

// experience = 80

// console.log(experience)
// player = 'Sally'

// const a = function () {
// 	console.log('a')
// }

// const
// let

// const obj = {
// 	player: 'bobby',
// 	experience: 100,
// 	wizardLevel: false,
// }

// obj.wizardLevel = true

// console.log(obj)

//////////////////
// Destructuring

/*
const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false,
}

const player = obj.player
const experience = obj.experience
let wizardLevel = obj.wizardLevel

const { player, experience } = obj
let { wizardLevel } = obj
*/

// Object properties

/*
const name = 'john snow'

const obj = {
	[name]: 'hello',
	// ['ray' + 'smith']: 'hihi',
	[1 + 2]: 'hihi',
}

console.log(obj)
*/

// const a = "Simon";
// const b = true,

// const obj = {
// 	a: a,
// 	b: b,
// 	c: c
// }

// const obj = {
// 	a,
// 	b,
// 	c,
// }

// Template strings

// const name = 'Sally'
// const age = 34
// const pet = 'horse'

// const greeting = 'Hello ' + ' you seem to be doing ' + greeting + '!'

// const greetingBest = `Hello ${name} you seem to be ${
// 	age - 10
// }. What a lovely ${pet} you have`

// console.log(greetingBest)

// default arguments

/*
function greet(name = '', age = 30, pet = 'cat') {
	return `Hello ${name} you seem to be ${
		age - 10
	}. What a lovely ${pet} you have`
}
*/

// Symbol

// let sym1 = Symbol()
// let sym2 = Symbol('foo')
// let sym3 = Symbol('foo')

// sym1
// Symbol()
// sym2
// Symbol(foo)
// sym3
// Symbol(foo)
// sym2 === sym3
// false

// arrow functions

// const add = (a, b) => {
// 	return a + b
// }

// function add(a, b) {
// 	return a + b
// }

// const add2 = (a, b) => a + b

///////////////////////
// 15.5 Advanced Functions
/*
function first() {
	var greet = 'Hi'
	function second() {
		alert(greet)
	}
	return second
}

const newFunc = first()
newFunc()
*/
/*
const first = () => {
	const greet = 'Hi'
	const second = () => {
		const name = 'bobby'
		alert(greet)
	}
	return second
}

const newFunc = first()
newFunc()
*/
// Closures - a function ran, the function executed. it´s never going to execute again.
// But it´s going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

// Currying
/*
const multiply = (a, b) => a * b
const curriedMultiply = a => b => a * b
curriedMultiply(3)
*/

/*
const multiply = (a, b) => a * b
const curriedMultiply = a => b => a * b
curriedMultiply(3)
*/

/*
const multiply = (a, b) => a * b
const curriedMultiply = a => b => a * b
const multiplyBy5 = curriedMultiply(5)
*/

// console.log(curriedMultiply(3)(4))

/*
console.log(multiplyBy5(5))
console.log(multiplyBy5(10))
console.log(multiplyBy5(11))
*/

// Compose
/*
const compose = (f, g) => a => f(g(a))

const sum = num => num + 1

console.log(compose(sum, sum)(5))
*/

// Avoiding Side Effects, functional purity

/*
var a = 1
function b() {
	a = 2
}
*/

///////////////////////
// 15.6 Advanced Arrays

// const array = [1, 2, 10, 16]

// const double = []
// const newArray = array.forEach(num => {
// 	double.push(num * 2)
// })

// console.log('forEach', double)

// map, filter, reduce

// const mapArray = array.map(num => {
// 	return num * 2
// })

// const mapArray = array.map(num => num * 2)

// console.log('map', mapArray)

// filter

// const filterArray = array.filter(num => {
// 	return num > 5
// })

// const filterArray = array.filter(num => num === 5)

// console.log('filter', filterArray)

// reduce
/*
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0)
*/
// const reduceArray = array.reduce((accumulator, num) => {
// 	return accumulator + num
// }, 5)

// console.log('reduce', reduceArray)

///////////////////////
// 15.7 Advanced Objects

// reference type

/*
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

object1 === object2
true
object1 === object3
false
object1.value = 15
15
object2.value
15
object3.value
10
*/

// context vs scope
// function b() {
// 	let a = 4
// }

// console.log(this)
// console.log(this === window)
// this.alert('hello')

// function a() {
// 	console.log(this)
// }
// a()

/*
const object4 = {
	a: function () {
		console.log(this)
	},
}

// instantiation
class Player {
	constructor(name, type) {
		console.log('player', this)
		this.name = name
		this.type = type
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I´m a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this)
	}
	play() {
		console.log(`wEEEE I´m a ${this.type}`)
	}
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

// Classical Inheritance
var Player = function (name, type) {
	this.name = name
	this.type = type
}

Player.prototype.introduce = function () {
	console.log(`Hi I am ${this.name}, I´m a ${this.type}`)
}

var wizard1 = new Player('Shelly', 'healer')
var wizard2 = new Player('Shawn', 'dark magic')

wizard1.play = function () {
	console.log(`WEEEEEE I´m a ${this.type}`)
}

wizard2.play = function () {
	console.log(`WEEEEE I´m a ${this.type}`)
}
*/

///////////////////////
// 15.8 ES7

// includes()

// console.log('Hellooooo'.includes('o'))

/*
const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('dog'))
console.log(pets.includes('birds'))

const square = x => x ** 2
const cube = y => y ** 3

console.log(square(2))
console.log(square(5))

console.log(cube(3))
console.log(cube(4))
*/

///////////////////////
// 15.9 ES8

// .padStart()
// .padEnd()

// console.log('Turtle'.padStart(10))
// console.log('Turtle'.padEnd(10))

const fun = (a, b, c, d, e) => {
	console.log(a)
}

console.log(fun(1, 2, 3, 4))

Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch',
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key])
})

Object.values(obj).forEach(value => {
	console.log(value)
})

Object.entries(obj).forEach(value => {
	console.log(value)
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '')
})

Async Await