class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Joe", "Doe");
/*myCustomer.firstName = "Joe";
myCustomer.lastName = "Doe";*/

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);