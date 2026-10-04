const form = document.getElementById("enrollmentForm");
const result = document.getElementById("result");

function enroll(courseName) {

    document.getElementById("course").value = courseName;

    document.querySelector(".enrollment").scrollIntoView({
        behavior: "smooth"
    });
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName =
        document.getElementById("studentName").value;

    const email =
        document.getElementById("email").value;

    const course =
        document.getElementById("course").value;

    result.innerHTML = `
        <div class="success">

            <h3>✓ Enrollment Successful!</h3>

            <p>
                Student: <strong>${studentName}</strong>
            </p>

            <p>
                Email: <strong>${email}</strong>
            </p>

            <p>
                Course: <strong>${course}</strong>
            </p>

            <p>
                Status: <strong>Enrolled</strong>
            </p>

        </div>
    `;

    form.reset();
});