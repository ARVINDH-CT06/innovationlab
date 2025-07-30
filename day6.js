let employees=[];

function addEmp(id,name,salary=true){
    employees.push({id,name,salary});
    console.log("employee added",employees);
}

addEmp(1,"arvindh",20000)
addEmp(2,"aswini",10000)
addEmp(3,"aswin",9000)



//to update emp
function updateEmp(id,newDetail){
    const emp=employees.find(e =>e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("updated",employees)
    }else{
        console.log("employee not found")

    }
}
updateEmp(3,{name:"jio"});


//delete e m p
function removeEmp(id){
    const index=employees.findIndex(e => e.id===id)
    if(index !==-1){
        employees.splice(index,id)
        console.log("employee removed",employees)
    }else{
        console.log("employee not found");
    }
}
removeEmp(3)


//totalsarary
function totalSalary(){
    const total=employees.reduce((sum,emp) =>sum+emp.salary, 0);
    console.log("total salary",total);
}
totalSalary()
