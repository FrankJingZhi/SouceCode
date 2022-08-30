import { cloneDeep1,cloneDeep2 } from "./deepClone";
import { describe,expect,test } from "vitest";

describe('deepClone',()=>{
  describe('deepClone1 JSON.stringify', ()=>{
    const person = {
      name: '王五',
      age: 38,
      friends:{
        name:'赵四',
      }
    }
    const clonePerson = cloneDeep1(person)
    clonePerson.age = 28
    clonePerson.friends.name = '刘能'
    test('person.age is 38',()=>{
      expect(person.age).toBe(38)
    })
    test('person.friends.name is 赵四',()=>{
      expect(person.friends.name).toBe('赵四')
    })
    test('clonePerson.age is 28',()=>{
      expect(clonePerson.age).toBe(28)
    })
    test('clonePerson.friends.name is 刘能',()=>{
      expect(clonePerson.friends.name).toBe('刘能')
    })
  })

  describe('deepClone2 recursion', ()=>{
    const person = {
      name: '王五',
      age: 38,
      friends:{
        name:'赵四',
      }
    }
    const clonePerson = cloneDeep2(person)
    clonePerson.age = 28
    clonePerson.friends.name = '刘能'
    test('person.age is 38',()=>{
      expect(person.age).toBe(38)
    })
    test('person.friends.name is 赵四',()=>{
      expect(person.friends.name).toBe('赵四')
    })
    test('clonePerson.age is 28',()=>{
      expect(clonePerson.age).toBe(28)
    })
    test('clonePerson.friends.name is 刘能',()=>{
      expect(clonePerson.friends.name).toBe('刘能')
    })
  })
})