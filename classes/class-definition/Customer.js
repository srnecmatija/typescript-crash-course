var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Joe", "Doe");
/*myCustomer.firstName = "Joe";
myCustomer.lastName = "Doe";*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
