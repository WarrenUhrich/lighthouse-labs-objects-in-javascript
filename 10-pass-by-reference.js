function addToObjProp(obj) {
    console.log('Object before addition:', obj); // {prop: 5}
    obj.prop = obj.prop + 2;
    console.log('Object after addition:', obj); // {prop: 7}
}

// We store POINTERS to complex structures in memory
// We store REFERENCES
const myObj = {prop: 5};

console.log('Before function runs:', myObj); // {prop: 5}
addToObjProp(myObj); // We are passing a reference to the ORIGINAL OBJECT
// CHANGES, are made DIRECTLY TO ORIGINAL OBJECT
console.log('After function runs:', myObj); // {prop: 7}
