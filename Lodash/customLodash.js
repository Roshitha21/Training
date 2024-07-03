
//capitalize()
var word = "alphabet"
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log("capitalize:" + capitalize(word))

//head()
function head(arr)
{
   return arr[0]
}
console.log("Head :",head(arr))

//tail
function tail(arr)
{
    n=(arr.length)
    return arr[n-1]
}

console.log("Tail :",tail([1,2,3]))

// min
function min(list) {
    let min = list[0]
    for (i of list)
        if (min > list[i])
            min = list[i]

    return min
}
console.log("min  of: " + min(list))

// max
function max(list) {
    let max = list[0]
    for (i of list)
        if (max < list[i])
            max = list[i]

    return max
}
// mean
function mean(list) {
    let result = 0
    for (i of list)
        result += i

    return result / list.length
}
console.log("mean of: " + mean(list))

// sum
function sum(list) {
    let result = 0
    for (i of list)
        result += i

    return result
}
console.log("sum of: " + sum(list))

//join()
function join(arr,op)
{
     res=""
     for (i in arr)
     {
         res+=arr[i]+op
     }
     return res
}
console.log("Join array :", join([1,2,3,4],"*"))
//frompairs()

const array = [['name', 'John'], ['age', 24], ['city', 'Hyd']];

function frompairs(array){
 const arrobj = Object.fromEntries(array);
 return arrobj;
}
console.log(frompairs(array));


//topairs()
const ob={
    name:'John',
    Age:35
}
function topairs(ob){
const objarr = Object.entries(ob);
return(objarr);
}
console.log(topairs(ob))

// intersection()
var arr1 = [1, 2, 3, 4, 5, 6, 7]
var arr2 = [2, 3, 8, 9, 0]
function intersection(arr1, arr2) {
    var res = []
    for (var i = 0; i < arr1.length; i++)
        if (arr2.indexOf(arr1[i]) !== -1) {
            var indexPos = arr2.indexOf(arr1[i]);
            res.push(arr2[indexPos]);
        }
    return res
}
console.log("intersection:" + intersection(arr1, arr2))


// compact():filters array by removing false,undefined,nan,' '  values
function compact(arr) {
    var t = []
    for (var i of arr) {
        if (i > 0)
            t.push(i)
    }
    return t

}
var com = [1, 2, 0, undefined, 3, NaN, 5, false, true, ' ']
console.log("compact:" + compact(com))

// concat()
function concat(arr1, arr2) {
    var t = []
    for (var i of arr1)
        t.push(parseInt(i))
    for (var i of arr2)
        t.push(parseInt(i))
    return t
}
console.log("concat:")
console.log(concat(arr1, arr2))


// slice()
function slice(array, begin, end) {
    var temp = []
    if (end === undefined || end > array.length)
        end = array.length
    for (var i = begin; i < end; i++) {
        temp.push(array[i])
    }
    return temp;
}
console.log(slice(arr1, 1, 5))

// indexOf
var list = [1, 4, 2, 3, 4, 5, 6, 7]

function indexof(array, k, index) {

    if (index === undefined || index < 0)
        index = 0
    for (let i = index; i < array.length; i++)
        if (array[i] == k)
            return i;

}
console.log("index of: " + indexof(list, 4, 2))
console.log("index of: " + indexof(list, 4))

// reverse
function reverse(list) {
    let t = []
    for (let i = list.length - 1; i >= 0; i--)
        t.push(list[i])
    return t
}
console.log("reverse of: " + reverse(list))




console.log("max of: " + max(list))
//  findindex
function findIndex(name, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][name] == value) {
            return i;
        }
    }
    return -1;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("findIndex: " + findIndex(arr, 2))
// chunk
function chunk(arr, chunkSize) {
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

console.log(chunk(arr, 3));

//drop 
function drop(arr)
{
    arr.shift()
    return arr
}
console.log("Drop Single :",drop(arr))

// dropRight()
function dropRight(arr, n) {
    var temp = arr
    if (n === undefined)
        n = 1
    for (var i = 0; i < n; i++)
        temp.pop()
    return temp
}
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("drop: " + dropRight(ar, 3))





