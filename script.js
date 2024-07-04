document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("resumeForm");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve input values
        const name = document.getElementById("name").value;
        const tenth = document.getElementById("tenth").value;
        const twelfth = document.getElementById("twelfth").value;
        const graduation = document.getElementById("graduation").value;
        const postGraduation = document.getElementById("postGraduation").value;
        const stream = document.getElementById("stream").value;
        const gradBranch = document.getElementById("gradBranch").value;
        const postGradBranch = document.getElementById("postGradBranch").value;
        const certifications = document.getElementById("certifications").value;
        const jobTitle = document.getElementById("jobTitle").value;
        const company = document.getElementById("company").value;
        const employmentDates = document.getElementById("employmentDates").value;
        const jobResponsibilities = document.getElementById("jobResponsibilities").value;
        const projects = document.getElementById("projects").value;
        const achievements = document.getElementById("achievements").value;
        const refName = document.getElementById("refName").value;
        const refContact = document.getElementById("refContact").value;
        const address = document.getElementById("address").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const languages = document.getElementById("languages").value;
        const skills = document.getElementById("skills").value;
        const socialMedia = document.getElementById("socialMedia").value;
        const fileUpload = document.getElementById("fileUpload").value;
        const photoFile = document.getElementById('photo').files[0];

        // Create a FileReader
        const photoReader = new FileReader();

        // When the FileReader finishes loading, set the source of the img element to the data URL
        photoReader.onload = function(e) {
            const photoUrl = e.target.result;

            // Display the data (you can customize this part according to your requirements)
            const output = `
                <h2><strong>Resume Output</strong></h2>
                <p><strong>Photograph:</strong></p>
                <img src="${photoUrl}" alt="Photograph" style="height:145px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>10th Grade:</strong> ${tenth}</p>
                <p><strong>12th Grade:</strong> ${twelfth}</p>
                <p><strong>Graduation:</strong> ${graduation}</p>
                <p><strong>Post Graduation:</strong> ${postGraduation}</p>
                <p><strong>12th Grade Stream:</strong> ${stream}</p>
                <p><strong>Graduation Branch:</strong> ${gradBranch}</p>
                <p><strong>Post Graduation Branch:</strong> ${postGradBranch}</p>
                <p><strong>Certifications/Diplomas:</strong> ${certifications}</p>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Dates of Employment:</strong> ${employmentDates}</p>
                <p><strong>Job Responsibilities:</strong> ${jobResponsibilities}</p>
                <p><strong>Projects/Research Work:</strong> ${projects}</p>
                <p><strong>Notable Achievements:</strong> ${achievements}</p>
                <p><strong>Reference Name:</strong> ${refName}</p>
                <p><strong>Reference Contact:</strong> ${refContact}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Languages Spoken:</strong> ${languages}</p>
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>Social Media Links:</strong> ${socialMedia}</p>
                <p><strong>Uploaded Additional Documents:</strong> ${fileUpload}</p>
                
            `;

            document.getElementById("resumeOutput").innerHTML = output;
            document.getElementById("resumeOutput").classList.remove("hidden");
        };

        // Read the photo file as data URL
        photoReader.readAsDataURL(photoFile);
    });
})