// name
// job title
// salary
// status
// https://coursework.vschool.io/employee-records/

function Employees (name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function () {
        // console.log(this)
        console.log(this.name + ", " + this.title + ", " + this.salary + ", " + this.status);
    }
}

var chris = new Employees ("Chris", "Web Developer", "60K");
var sushant = new Employees ("Sushant", "Web Architect", "60K");
var jameel = new Employees ("Jameel", "Project Mgr", "60K");

