//Employee constructor function
function Employee(id, name, department, salary){
    this.id =id;
    this.name = name;
    this.department= department;
    this.salary = salary;
}
//create a simple employee Database
const employeeDB = {};
//function to add employee to the database
function addEmployee(id, name, department, salary){
    const employee = new Employee(id, name, department, salary);
    employeeDB[id]=employee
    console.log("Employee with ID " + id + " added")
}
//function to get all employee (Object.values)
function getAllEmployee(){
    const employee=Object.values(employeeDB);
    console.log("List of Employee");
    employee.forEach((employee)=>{
        console.log(`Name :${employee.name},Department:${employee.department},salary :${employee.salary}`)
    })
}
//function to get employee details by ID(object.entries)
function getEmplyeeDetails(id){
    if(employeeDB[id]){
        return Object.entries(employeeDB[id])
    }
    return `EMployee with ID ${id} is not found`;
}
//Function to update employee details
function updateEmployee(id, updateDetails){
    if(employeeDB[id]){
        Object.assign(employeeDB[id], updateDetails)
    }
    else{
        console.log(`EMployee with ID ${id} is not found`)
    }
}
// Function to freeze emloyeee data
function freezeEmployee(id){
      if(employeeDB[id]){
        Object.freeze(employeeDB[id])
        console.log(`Employee Data Freezed`);
        }
    else{
        console.log(`EMployee with ID ${id} is not found`)
    }
}
//FUnction to seal employee
function sealEmployee(id){
      if(employeeDB[id]){
        Object.seal(employeeDB[id])
         console.log(`Employee Data sealed`);
        }
    else{
        console.log(`EMployee with ID ${id} is not found`)
    }
}

//usage
addEmployee(1, "Alice", "Engineering", 70000)
addEmployee(2, "Bob", "Marketing", 50000)
addEmployee(3, "Charlie", "HR", 60000)

//view employee
console.log("\n");
getAllEmployee();

//Get Employee  details with ID
console.log("\n");
console.log("view Employee Details");
console.log(getEmplyeeDetails(2))

//update employee details
console.log("\n");
console.log("update Employee Details");
updateEmployee(2, {salary: 55000})
console.log(" After update");
getAllEmployee();

//freeze employee data
console.log("\n");
console.log("Freezing Employee Data");
freezeEmployee(2)
//Attempt to modify frozen data
employeeDB[2].salary = 60000 //this won't work
console.log("After Freeze");
getAllEmployee();

//seal employee data
console.log("\n");
console.log("sealing Employee Data");
sealEmployee(1)
employeeDB[1].salary = 80000 
console.log("After sealing");//this working
console.log(getEmplyeeDetails(1));