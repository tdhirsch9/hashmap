import Hashmap from './index'

const test = new Hashmap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('apple', 'green')
test.set('moon', 'silver')



console.log(test.entries())

console.log('Initial Capacity:', test.capacity)
console.log(test.length())


console.log(test.get('apple'))
test.remove('apple')
console.log(test.has('apple'))

console.log(test.keys())
console.log(test.values())

test.clear()
console.log(test.entries())