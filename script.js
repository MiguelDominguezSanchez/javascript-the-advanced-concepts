///////////////////////
// 3.3 Lexical Environment

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
