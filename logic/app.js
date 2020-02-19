var myClass = function() {
    var occupations = [
        "Employeed", "Self-Employed", "Un-Employeed", "Doctor", "Teacher", "Engineer"
    ];
    var persons = [
        { id: 101, name: 'A', age: 20, occupation: "Employed" },
        { id: 102, name: 'B', age: 23, occupation: "Doctor" },
        { id: 103, name: 'C', age: 25, occupation: "Engineer" }
    ];
    this.getOccupations = function() {
        return occupations;
    };
    this.getPersons = function() {
        return persons;
    };
    this.addPerson = function(person) {
        try {
            if (person.age < 0) {
                throw new Error("Age cannot be -ve");
            }
            persons.push(person);
            return persons;
        } catch (e) {
            console.log('error occured ' + e.message);
        }
    }
}

// var obj = new myClass();
// console.log(JSON.stringify(obj.getPersons()));
// var pers = { id: 104, name: 'D', age: -36 };
// console.log(JSON.stringify(obj.addPerson(pers)));