import {describe, test,expect } from "vitest"
import {MyNew} from './index'


describe('Compare',()=>{
  describe.skip('Compare first',()=>{
    function Person(name, age){
      this.name = name
      this.age = age
      this.habit = 'games'
    }
    Person.prototype.strength = 24
    
    Person.prototype.sayHello = function(){
      return `hello, I'm ${this.name}`
    }
    const seanNew = new Person('wang', 18)
    const seanMyNew = MyNew(Person, 'wang', 18)
    test('sean name is wang',()=>{
      expect(seanMyNew.name).toBe(seanNew.name)
    })
    test('sean age is 18',()=>{
      expect(seanMyNew.age).toBe(seanNew.age)
    })
    test('sean habit is games',()=>{
      expect(seanMyNew.habit).toBe(seanNew.habit)
    })
    test('sean strength is 24',()=>{
      expect(seanMyNew.strength).toBe(seanNew.strength)
    })
    test(`sean sayHello is hello, I'm wang`,()=>{
      expect(seanMyNew.sayHello()).toBe(seanNew.sayHello())
    })
  })
  describe('Compare two',()=>{
    function Person(name, age){
      this.name = name
      this.habit = 'games'
      return {
        age: 18
      }
    }
    Person.prototype.strength = 24
    Person.prototype.sayHello = function(){
      return `hello, I'm ${this.name}`
    }
    const seanNew = new Person('wang', 18)
    const seanMyNew = MyNew(Person, 'wang', 18)
    console.log('seanNew: ',seanNew)
    console.log('seanMyNew: ',seanMyNew)
    test('sean name is wang',()=>{
      expect(seanMyNew.name).toBe(seanNew.name)
    })
    test('sean age is 18',()=>{
      expect(seanMyNew.age).toBe(seanNew.age)
    })
    test('sean habit is games',()=>{
      expect(seanMyNew.habit).toBe(seanNew.habit)
    })
    test('sean strength is 24',()=>{
      expect(seanMyNew.strength).toBe(seanNew.strength)
    })
    // 
    test(`sean sayHello is undefined`,()=>{
      expect(seanNew.sayHello).toBe(seanMyNew.sayHello)
    })
  })
})
