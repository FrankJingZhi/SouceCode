/**
 * 获取数组最大深度
 * 循环 + 递归 => 深度优先遍历
 */

function getArrayLayer(arr, attr, index = 1){
  let newIndex = index
  let root = null
  for(const item of arr){
    let tempIndex = index
    if(item[attr]){
      tempIndex = getArrayLayer(item[attr], attr, index+1)
      if(tempIndex > newIndex){
        newIndex = tempIndex
      }
    }
  }
  return newIndex
}

const arr = [{
  a: '1',
  child: [{
      a: '1-1',
      child: [{
          a: '1-1-1'
        },
        {
          a: '1-1-2'
        }
      ]
    },
    {
      a: '1-2'
    }
  ]
},
{
  a: '2'
},
{
  a: '3',
  child: [{
      a: '3-1',
      child: [{
          a: '3-1-1',
          child: [{
              a: '3-1-1-1'
            },
            {
              a: '3-1-1-2'
            }
          ]
        },
        {
          a: '3-1-2'
        }
      ]
    },
    {
      a: '3-2'
    }
  ]
},

]

console.log(getArrayLayer(arr, 'child'));
