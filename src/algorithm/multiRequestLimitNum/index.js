/**
 * 实现一个方法multiRequestLimitNum(reqArr, limitNum)，功能如下
 * 1、可以并发请求
 * 2、最大并发数不能超过limitNum
 * 3、每次执行完一个，就可以从reqArr中取出一个补上
 * 4、最后按顺序返回reqArr的执行结果
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function multiRequestLimitNum(reqArr, limitNum) {
    var reqLen = reqArr.length;
    var resArr = new Array(reqLen); // 初始化一个等长的数组，存储执行结果
    var i = 0; // 用来标识执行的请求索引
    return new Promise(function (resolve, reject) {
        var maxNum = reqLen >= limitNum ? limitNum : reqLen; // 计算最大并发数量
        while (i < maxNum) { // 将并发请求放到异步队列中，并发执行
            reqFn();
        }
        // 请求执行函数
        function reqFn() {
            return __awaiter(this, void 0, void 0, function () {
                var cur, fn, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cur = i++ // 记录当前请求的索引，等执行完成后存入对应的resArr中
                            ;
                            fn = reqArr[cur] // 取出当前的请求
                            ;
                            return [4 /*yield*/, fn()["catch"](function (err) { return err; })]; // 等待请求执行完成
                        case 1:
                            data = _a.sent() // 等待请求执行完成
                            ;
                            resArr[cur] = data; // 将执行结果放入对应的resArr中
                            console.log(resArr);
                            i === reqLen ? resolve(resArr) : reqFn(); // 如果全部执行完，那么就返回；否则，就从reqArr中再取出一个继续执行
                            return [2 /*return*/];
                    }
                });
            });
        }
    });
}
function req(res, delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(res);
        }, delay);
    });
}
multiRequestLimitNum([
    req.bind(null, 1, 1000),
    req.bind(null, 2, 500),
    req.bind(null, 3, 2000),
    req.bind(null, 4, 100)
], 2);
