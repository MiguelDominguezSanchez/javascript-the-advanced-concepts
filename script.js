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

console.log(Object.is(-0, +0))
console.log(NaN === NaN)
