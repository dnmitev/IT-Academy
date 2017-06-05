var myCompany = Object.create(Company);
myCompany.init('My Fancy Company');
console.log(myCompany);

var empl = Object.create(Employee);
empl.init('Pesho Peshev', 'shef na toaletnata');

var empl1= Object.create(Employee);
empl1.init('Gosho Peshev', 'shef na vratata');

var empl2= Object.create(Employee);
empl2.init('Radoi Peshev', 'shef na shefovete');

var empl3= Object.create(Employee);
empl3.init('Pesho Ivanov', 'bai ivan');

console.log(empl);
console.log(empl1);
empl.introduce();

console.log(myCompany.employeesCount);
myCompany.hire(empl);
myCompany.hire(empl1);
myCompany.hire(empl2);
myCompany.hire(empl3);
console.log(myCompany.employeesCount);
console.log(myCompany.getEmployeesList());
myCompany.fire('Pesho Peshev');
console.log(myCompany.employeesCount);
console.log(myCompany.getEmployeesList());
