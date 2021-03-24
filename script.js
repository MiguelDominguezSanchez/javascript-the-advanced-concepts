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
// 4.5 Exercise Hoisting
