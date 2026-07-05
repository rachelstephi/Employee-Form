const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");
const empty = document.getElementById("empty");

let employees = [];
let id = 1;

addBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value.trim();

    if(name === "" || profession === "" || age === ""){
        message.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
        message.className = "error";
        return;
    }

    message.textContent = "Success : Employee Added!";
    message.className = "success";

    const employee = {
        id: id++,
        name,
        profession,
        age
    };

    employees.push(employee);

    nameInput.value = "";
    professionInput.value = "";
    ageInput.value = "";

    displayEmployees();
});

function displayEmployees(){

    employeeList.innerHTML = "";

    if(employees.length === 0){
        empty.style.display = "block";
    }
    else{
        empty.style.display = "none";
    }

    employees.forEach((employee,index)=>{

        const row = document.createElement("div");
        row.className = "employee";

        row.innerHTML = `
        <div class="info">
            <span>${index+1}.</span>
            <span>Name : ${employee.name}</span>
            <span>Profession : ${employee.profession}</span>
            <span>Age : ${employee.age}</span>
        </div>

        <button class="deleteBtn">Delete User</button>
        `;

        row.querySelector(".deleteBtn").addEventListener("click",()=>{

            employees = employees.filter(emp => emp.id !== employee.id);

            displayEmployees();
        });

        employeeList.appendChild(row);

    });

}
