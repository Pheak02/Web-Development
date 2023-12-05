$(document).ready(function() {

    const homePageTemplate = `
        <h1>Home page</h1>
    `;
    
    const studentPageTemplate = `
        <table id="tableStudent" class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#newStudentModal">
                            + New
                        </a>
                        
                        <div class="modal fade" id="newStudentModal" tabindex="-1" aria-labelledby="newStudentModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h2 class="modal-title fs-5" id="newStudentModalLabel">New Student</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                        <label for="" class="form-label">ID</label>
                                        <input type="text" class="form-control" id="id" placeholder="student id">
                                        </div>
                                        <div class="mb-3">
                                            <label for="newFullName" class="form-label">Full Name</label>
                                            <input type="text" class="form-control" id="newFullName">
                                        </div>
                                        <div class="mb-3">
                                        <label for="newPhone" class="form-label">Phone</label>
                                        <input type="text" class="form-control" id="newPhone">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" id="btnSaveStudent" class="btn btn-primary">Save</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;

    const contactPageTemplate = `
        <h1>Contact us page</h1>
    `;

    function closeModal(id) {
        const myModalEl = $('#' + id);
        const modal = bootstrap.Modal.getInstance(myModalEl)
        modal.hide();
    }

    function insertStudentRow(student) {
        console.log(student)
        $('#tableStudent tbody').append(`
            <tr>
                <td>${student.id}</td>
                <td>${student.fullname}</td>
                <td>${student.phone}</td>
                <td>
                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary btnEdit" data-bs-toggle="modal" data-bs-target="#editStudentModal" data-student-id="${student.id}">Edit</button>
                    <button type="button" class="btn btn-danger btnDelete" data-student-id="${student.id}">Delete</button>
                    </div>
                </td>
            </tr>
        `);
    }

    function saveStudent() {
        const fullname = $('#newFullName').val();
        const phone = $('#newPhone').val();
        const id = $('#id').val();
        const newStudent = {
            "id" : id,
            "fullname": fullname,
            "phone": phone
        };
    
        $.ajax({
            url: 'http://localhost:3000/student',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newStudent), 
            success: function(student) {
                insertStudentRow(student);
                closeModal('newStudentModal');
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
    

    function loadStudents() {
        $.ajax({
            url: 'http://localhost:3000/student',
            method: 'GET',
            success: function(data) {
                $.each(data.data, function(index, student) {
                    insertStudentRow(student);
                });
            },
            error: function(err) {
                console.log(err);
            }
        });
    }

    function loadPageContent(pageId) {
        const pageContent = $('#root');
        switch (pageId) {
            case 'studentPage':
                document.title = 'Students';
                pageContent.html(studentPageTemplate);
                loadStudents();
                break;
            case 'contactPage':
                document.title = 'Contact Us';
                pageContent.html(contactPageTemplate);
                break;
            default: {
                document.title = 'Home';
                pageContent.html(homePageTemplate);
            }
        }
    }

    function deleteStudent(studentId) {
        $.ajax({
            url: 'http://localhost:3000/student/' + studentId,
            method: 'DELETE',
            success: function (data) {
                console.log('Student deleted successfully');
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    function updateStudent(studentId, updatedStudent) {
        $.ajax({
            url: 'http://localhost:3000/student/' + studentId,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(updatedStudent),
            success: function (data) {
                console.log('Student updated successfully');
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    $('#root').on('click', '.btnDelete', function () {
        const studentId = $(this).data('student-id');
        if (confirm('Are you sure you want to delete this student?')) {
            deleteStudent(studentId);
            $(this).closest('tr').remove();
        }
    });

    $('#root').on('click', '.btnEdit', function () {
        const studentId = $(this).data('student-id');
        const updatedFullName = prompt('Enter updated full name:');
        const updatedPhone = prompt('Enter updated phone:');
        const updatedStudent = {
            fullname: updatedFullName,
            phone: updatedPhone
        };
        updateStudent(studentId, updatedStudent);
        const row = $(this).closest('tr');
        row.find('.colFullName').text(updatedFullName);
        row.find('.colPhone').text(updatedPhone);
    });
    
    $('a').on('click', function(e) {
        e.preventDefault();
        const pageId = $(this).attr('href');
        loadPageContent(pageId);
        localStorage.setItem('pageId', pageId);
    });

    $('#root').on('click', '#btnSaveStudent', function() {
        saveStudent();
    });


    loadPageContent(localStorage.getItem('pageId') ?? 'homePage');
});