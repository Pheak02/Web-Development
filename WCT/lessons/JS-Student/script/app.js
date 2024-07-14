var lastId = 0;

function loadStudents() {
    // @TODO: call API
    let data = [
        {
            "id": 1,
            "fullname": "Sok San",
            "phone": "012 121212"
        },
        {
            "id": 2,
            "fullname": "Mey Mey",
            "phone": "013 121212"
        }
    ];

    return data;
}

function addRowToTable(student) {
    const tableStudent = document.getElementById('tableStudent');
    const rowCount = tableStudent.rows.length;
    const row = tableStudent.insertRow(rowCount);
    const col1 = row.insertCell(0);
    col1.innerHTML = student.id;
    lastId = parseInt(student.id);
    
    const col2 = row.insertCell(1);
    col2.innerHTML = student.fullname;

    const col3 = row.insertCell(2);
    col3.innerHTML = student.phone;

    const col4 = row.insertCell(3);
    const btnGroup = document.createElement('div');
    btnGroup.setAttribute('class', 'btn-group');
    btnGroup.setAttribute('role', 'group');
    btnGroup.setAttribute('aria-label', 'Student action');
    col4.appendChild(btnGroup);

    const btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn btn-primary');
    btnEdit.setAttribute('type', 'button');
    btnEdit.innerHTML = 'Edit';
    const selectedStudent = student;
    btnEdit.onclick = function() {
        console.log("Selected student", selectedStudent);
    }
    btnGroup.appendChild(btnEdit);

    const btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'btn btn-danger');
    btnDelete.setAttribute('type', 'button');
    btnDelete.innerHTML = 'Delete';
    btnDelete.onclick = function() {
        if (confirm('Are you sure?')) {
            console.log("Delete student", selectedStudent);
        }
    }
    btnGroup.appendChild(btnDelete);
}

function loadStudentsToView() {
    const students = loadStudents();
    for (student of students) {
        addRowToTable(student);
    }
}

function saveStudent() {
    const newId = ++lastId;
    const fullname = document.getElementById('newFullName').value;
    const phone = document.getElementById('newPhone').value;
    const student = {
        "id": newId,
        "fullname": fullname,
        phone
    };
    addRowToTable(student);
    // Close modal
    const myModalEl = document.getElementById('modalCreateStudent');
    const modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}

// @TODO: execute function after page finish loaded
// Init load students
loadStudentsToView();
