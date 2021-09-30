// Write your solution in this file!

const employee = {};
employee.name = "Michael";
employee.streetAddress = "Gillette"

//hint: use spread operator
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return{
        ...obj,
        [key]: value,
    };
}

const updemployee = updateEmployeeWithKeyAndValue (
    employee,
    "Sam",
    "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

const desemployee = destructivelyUpdateEmployeeWithKeyAndValue (
    employee,
    "Sam",
    "12 Broadway"
);

//hint: use spread operator
function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };

    newObj[key] = value;

    return newObj;
}

const des2employee = deleteFromEmployeeByKey(
    employee,
    "Sam"
);

function destructivelyDeleteFromEmployeeByKey(employee, key) { 
    delete employee[key];
    return employee;
};

const ddfemployee = destructivelyDeleteFromEmployeeByKey(
    employee,
    "12 Broadway"
)




