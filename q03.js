/*

What is output of following code.

*/

"use strict";

var employee = {
	company: "Rohit"
};

var emp1 = Object.create(employee);
delete emp1.company;
console.log(emp1.company);

/*

---Output---
"Rohit"


 ---Reason---
 
 *Line 11*
 Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
 
Thus, in the given code, Object.create(employee) creates an empty object (since [desciptors] is empty) whose [[Prototype]] points to employee object, and assigns this newly created empty object to the emp1 variable.

*Line 12*
We try to delete company property from emp1 variable, but it does not exist in emp1's local lexical environment, i.e. it is empty. Therefore, nothing is deleted.

*Line 13*
The property 'company' does not exist in emp1 object's local lexical environment. Therefore, the [[Prototype]] of the emp1 object is checked, where the 'company' property exists, and it's value is "Rohit".

Therefore, the string "Rohit" is printed in the console.

*/
