const customMap = (arr, callback) => {
    const mappedArray = [];
    for (let index = 0; index < arr.length; index++) {
        mappedArray.push(callback(arr[index]));
    }
    return mappedArray;
}

const customFilter = (arr, callback) => {
    const filteredArray = [];
    for (let index = 0; index < arr.length; index++) {
        if (callback(arr[index])) {
            filteredArray.push(arr[index]);
        }
    }
    return filteredArray;
}

const customReduce = (arr, callback, initialVal) => {
    let accumulator = initialVal === undefined ? arr[0] : initialVal;
    for (let index = 0; index < arr.length; index++) {
        accumulator = callback(accumulator, arr[index]);
    }
    return accumulator;
}

const customForEach = (arr, callback) => {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index]);
    }
}

let arr = [{
    name: 'Gourav',
    age: 10
},
{
    name: 'Sourav',
    age: 11
}
];
console.log(customMap(arr, (ele) => {
    return {
        name: ele.name,
        age: ele.age
    }
}))
console.log(customFilter(arr, (ele) => {
    return ele.age === 11;
}))

console.log(customReduce(arr, ((acc, ele) => {
    return acc + ele.age
}), 0));

console.log(customForEach(arr, (ele) => {
    console.log(ele.name)
}));