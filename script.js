function generateCV() {
    document.getElementById("cv-name").innerText = document.getElementById("name").value;
    document.getElementById("cv-email").innerText = document.getElementById("email").value;
    document.getElementById("cv-phone").innerText = document.getElementById("phone").value;
    document.getElementById("cv-address").innerText = document.getElementById("address").value;
    document.getElementById("cv-objective").innerText = document.getElementById("objective").value;

    let educationData = document.getElementById("education").value.split("\n");
    let educationTable = "<tr><th>Degree Name</th><th>Board/Institution</th><th>Grade</th><th>Year</th></tr>";
    educationData.forEach(row => {
        let cols = row.split(",");
        educationTable += `<tr><td>${cols[0]}</td><td>${cols[1]}</td><td>${cols[2]}</td><td>${cols[3]}</td></tr>`;
    });
    document.getElementById("cv-education").innerHTML = educationTable;

    let experienceData = document.getElementById("experience").value.split("\n");
    let experienceTable = "<tr><th>Job Title</th><th>Organization</th><th>Duration</th></tr>";
    experienceData.forEach(row => {
        let cols = row.split(",");
        experienceTable += `<tr><td>${cols[0]}</td><td>${cols[1]}</td><td>${cols[2]}</td></tr>`;
    });
    document.getElementById("cv-experience").innerHTML = experienceTable;

    let certificationData = document.getElementById("certifications").value.split("\n");
    let certificationTable = "<tr><th>Certification</th><th>Institute</th><th>Year</th></tr>";
    certificationData.forEach(row => {
        let cols = row.split(",");
        certificationTable += `<tr><td>${cols[0]}</td><td>${cols[1]}</td><td>${cols[2]}</td></tr>`;
    });
    document.getElementById("cv-certifications").innerHTML = certificationTable;

    let skillsData = document.getElementById("skills").value.split("\n");
    let skillsTable = "<tr><th>Skill</th><th>Proficiency</th></tr>";
    skillsData.forEach(row => {
        let cols = row.split(",");
        skillsTable += `<tr><td>${cols[0]}</td><td>${cols[1]}</td></tr>`;
    });
    document.getElementById("cv-skills").innerHTML = skillsTable;

    let profileData = document.getElementById("personal-profile").value.split("\n");
    let profileTable = "<tr><th>Field</th><th>Details</th></tr>";
    profileData.forEach(row => {
        let cols = row.split(",");
        profileTable += `<tr><td>${cols[0]}</td><td>${cols[1]}</td></tr>`;
    });
    document.getElementById("cv-personal-profile").innerHTML = profileTable;

    document.getElementById("cv-output").style.display = "block";
}

function printCV() {
    window.print();
}
