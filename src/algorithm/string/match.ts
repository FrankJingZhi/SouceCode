/**
 * 字符串匹配问题——正则表达式初相见
 * 真题描述： 设计一个支持以下两种操作的数据结构：
  void addWord(word)
  bool search(word)
  search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
  . 可以表示任何一个字母。

  示例: addWord("bad")
  addWord("dad")
  addWord("mad")
  search("pad") -> false
  search("bad") -> true
  search(".ad") -> true
  search("b..") -> true
  说明:
  你可以假设所有单词都是由小写字母 a-z 组成的。
 */

class MyMatch {
  value: string[];
  constructor(){
    this.value = []
  }
  addWord(string){
    this.value.push(string)
    console.log('value',this.value)
  }
  search(string){
    const reg = new RegExp(string)
    const result = this.value.some(item => reg.test(item))
    console.log('result',result)
    return result 
  }
}

const myMatch = new MyMatch()
myMatch.addWord("bad")
myMatch.addWord("dad")
myMatch.addWord("mad")
myMatch.search("pad")
myMatch.search("bad")
myMatch.search(".ad")
myMatch.search("b..")