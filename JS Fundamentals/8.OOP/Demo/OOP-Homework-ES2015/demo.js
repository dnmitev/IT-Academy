var myCompany = new  Company('My Company');
console.log(myCompany);

var empl = new Employee('Pesho Peshev', 'shef');
empl.introduce();
var empl1 = new Employee('Gosho Peshev', 'shef na vratata');
var empl2 = new Employee('Pesho Ivanov', 'shef na asansiora');
var empl3 = new Employee('Geregana Georgieva', 'shef na bai ivan');
var empl4 = new Employee('Pesho Petrov', 'bai ivan');


console.log(myCompany.employeesCount);
myCompany.hire(empl);
myCompany.hire(empl1);
myCompany.hire(empl2);
myCompany.hire(empl3);
myCompany.hire(empl4);
console.log(myCompany.employeesCount);
console.log(myCompany.getEmployeesList());
myCompany.fire('Geregana Georgieva');
debugger;
console.log(myCompany.getEmployeesList());
