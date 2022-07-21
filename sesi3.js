class Employee {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}

let employee = new Employee('bambang')

console.log(employee.getName())

export default Employee