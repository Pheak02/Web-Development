const mockEmployees = [
    {
        "id": 1,
        "fullname": "Sok San",
        "gender": "Male"
    },
    {
        "id": 2,
        "fullname": "Mey Mey",
        "gender": "Female"
    },
    {
        "id": 3,
        "fullname": "Unknown",
        "gender": "Other"
    }
];
var lastId = 0;

function insertRowToTable(employee) {
    const tableEmployee = document.getElementById('tableEmployee');
    const rowCount = tableEmployee.rows.length;
    const newRow = tableEmployee.insertRow(rowCount);
    
    const employeeId = employee.id;
    const col1 = newRow.insertCell(0);
    col1.innerHTML = employee.id;
    
    const col2 = newRow.insertCell(1);
    col2.innerHTML = employee.fullname;
    
    const col3 = newRow.insertCell(2);
    col3.innerHTML = employee.gender;

    const col4 = newRow.insertCell(3);
    const buttonGroup = document.createElement('div');
    buttonGroup.setAttribute('class', 'btn-group');
    buttonGroup.setAttribute('role', 'group');
    col4.appendChild(buttonGroup);

    const btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn btn-primary');
    btnEdit.setAttribute('type', 'button');
    btnEdit.innerHTML = 'Edit';
    btnEdit.onclick = function() {
        console.log('Selected ID: ', employeeId);
    }
    buttonGroup.appendChild(btnEdit);

    const btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'btn btn-danger');
    btnDelete.setAttribute('type', 'button');
    btnDelete.innerHTML = 'Delete';
    btnDelete.onclick = function() {
        if (confirm('Are you sure?')) {
            console.log('Deleted ID: ', employeeId);
        }
    }
    buttonGroup.appendChild(btnDelete);
}

function loadEmployees() {
    for (employee of mockEmployees) {
        insertRowToTable(employee);
        lastId = employee.id;
    }
}

function saveEmployee() {
    const fullname = document.getElementById('newFullName').value;
    const ele = document.getElementsByName('newGender');
    let gender = '';
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            gender = ele[i].value;
        }
    }

    const newEmployee = {
        "id": ++lastId,
        "fullname": fullname,
        gender
    };
    insertRowToTable(newEmployee);
    const myModalEl = document.getElementById('newEmployeeModal');
    const modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}

// Execute after page loaded
loadEmployees();
