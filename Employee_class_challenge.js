class Employee{
    constructor(name,position,salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getsalary(){
        return this.salary;
    }
}

const employee1=new Employee("prabhir Kumar","Software Engineer", 80000);
console.log(employee1.getsalary());