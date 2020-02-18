// JavaScript Objects
// Object Literals aka JavaScript Object Notation (JSON) object
// Object is defined usig Key:Value pair
// Single Object throught the Block means in current .js file 
var obj = {
    id: 101,
    name: 'A'
};
console.log(' Id = ' + obj.id + ' Name = ' + obj.name);

var obj1 = obj; // assigning aka same reference linking
console.log(' with obj1 Id = ' + obj1.id + ' Name = ' + obj1.name);
console.log('with obj Id = ' + obj.id + ' Name = ' + obj.name);
obj1.id = 102;
console.log(' with obj1 after updating Id = ' + obj1.id + ' Name = ' + obj1.name);
console.log('with obj after updating obj2.id the obj.id = ' + obj.id + ' Name = ' + obj.name);

// String objects
// Array objects
// Date object