const baseUrl = "http://localhost:3003/api"; // Set the base URL

$(document).ready(function () {
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
                                        <input type="number" id="id" class="form-control" placeholder="Auto Generate">
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
    const myModalEl = $("#" + id);
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  }

  function insertStudentRow(student) {
    $("#tableStudent tbody").append(`
            <tr>
                <td>${student.id}</td>x
                <td>${student.fullname}</td>
                <td>${student.phone}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </td>
            </tr>
        `);
  }

  function saveStudent() {
    const id = $("#id").val() || "";
    const fullname = $("#newFullName").val();
    const phone = $("#newPhone").val();
    const newStudent = {
      fullname: fullname,
      phone: phone,
      id: id,
    };
    $.ajax({
      url: `${baseUrl}/students`,
      method: "POST",
      data: newStudent,
      success: function (student) {
        console.log("haha", student);
        insertStudentRow(newStudent);
        console.log("new studnet", newStudent);
        closeModal("newStudentModal");
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  function loadStudents() {
    $.ajax({
      url: `${baseUrl}/students`,
      method: "GET",

      success: function (data) {
        console.log(data);
        $.each(data.data, function (key, student) {
          insertStudentRow(student);
        });
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  function loadPageContent(pageId) {
    const pageContent = $("#root");
    switch (pageId) {
      case "studentPage":
        document.title = "Students";
        pageContent.html(studentPageTemplate);
        loadStudents();
        break;
      case "contactPage":
        document.title = "Contact Us";
        pageContent.html(contactPageTemplate);
        break;
      default: {
        document.title = "Home";
        pageContent.html(homePageTemplate);
      }
    }
  }

  $("a").on("click", function (e) {
    e.preventDefault();
    const pageId = $(this).attr("href");
    loadPageContent(pageId);
    localStorage.setItem("pageId", pageId);
  });

  $("#root").on("click", "#btnSaveStudent", function () {
    saveStudent();
  });

  loadPageContent(localStorage.getItem("pageId") ?? "homePage");
});
