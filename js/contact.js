function checkRecommendedField() {
    let contactName = document.getElementById("contact-name");
    let contactEmail = document.getElementById("contact-email");
    let contactComment = document.getElementById("contact-comment");
    if (contactName.value == "" || contactEmail.value == "" || contactComment.value == "") {
        document.getElementById("fail").style.display = "block";
        document.getElementById("success").style.display = "none";
    } else {
        document.getElementById("fail").style.display = "none";
        document.getElementById("success").style.display = "block";
        document.location.href = "../index.html";
    }
}