(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {};
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('./test.js')
    })({"./test.js":{"deps":{"./foo.js":"./foo.js"},"code":"\"use strict\";\n\nvar _foo = _interopRequireDefault(require(\"./foo.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// import * as Foo from './foo'\n// // import foo from './foo'\n// console.log(Foo.default(18))\n// console.log(Foo.sayHello('frank'))\nconsole.log((0, _foo[\"default\"])(1, 2));"},"./foo.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n// export const sayHello = (str) => {\n//   const result = 'hello, my name is ' + str\n//   return result\n// }\n// const age = (number) => {\n//   return number\n// }\n// export default age\nvar _default = function _default(a, b) {\n  return a + b;\n};\n\nexports[\"default\"] = _default;"}})