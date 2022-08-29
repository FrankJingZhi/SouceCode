"use strict";
/**
 * 快排：https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 * 问题：将一个无序数组转换为有序数组
 * 思路：1.在数据集之中，选择一个元素为基准。
 * 2.循环数组，把比基准大的放到右边，比基准小的放到左边。
 * 3.对基准两边的子集，重复执行操作1、2，知道所有子集只剩下一个元素
 */
exports.__esModule = true;
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (cur < pivot) {
            left.push(cur);
        }
        else {
            right.push(cur);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
exports["default"] = quickSort;
