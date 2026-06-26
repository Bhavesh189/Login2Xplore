const jpdbBaseURL = "https://api.login2explore.com:5577";
const jpdbIRL = "/api/irl";
const jpdbIML = "/api/iml";
const dbName = "SCHOOL-DB";
const relName = "STUDENT-TABLE";
const token = "90935107|-31949246847241796|90903658";

let currentRecNo = ""; 

function showInfinityAlert(message, type) {
    const alertContainer = document.getElementById("alert-container");
    
    const alertBox = document.createElement("div");
    alertBox.classList.add("custom-alert", type);
    
    let iconClass = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';
    
    alertBox.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <div>${message}</div>
        <div class="alert-progress"></div>
    `;
    
    alertContainer.appendChild(alertBox);
    
    setTimeout(() => { alertBox.classList.add("show"); }, 10);
    
    setTimeout(() => {
        alertBox.classList.remove("show");
        setTimeout(() => { alertBox.remove(); }, 400);
    }, 3000);
}

function resetForm() {
    $("#rollNo").val("").prop("disabled", false).focus();
    $("#fullName, #className, #birthDate, #address, #enrollDate").val("").prop("disabled", true);
    $("#saveBtn, #updateBtn, #resetBtn").prop("disabled", true);
    currentRecNo = "";
}

function validateData() {
    if ($("#rollNo").val().trim() === "" || 
        $("#fullName").val().trim() === "" || 
        $("#className").val().trim() === "" || 
        $("#birthDate").val().trim() === "" || 
        $("#address").val().trim() === "" || 
        $("#enrollDate").val().trim() === "") {
        
        showInfinityAlert("Access Denied! All fields are mandatory.", "error");
        return false;
    }
    return true;
}

function getStudent() {
    let rollNoVal = $("#rollNo").val().trim();
    if (rollNoVal === "") {
        resetForm();
        return;
    }

    let getReqJson = JSON.stringify({ "Roll-No": rollNoVal });
    let getReq = createGET_BY_KEYRequest(token, dbName, relName, getReqJson);
    
    jQuery.ajaxSetup({async: false});
    let result = executeCommandAtGivenBaseUrl(getReq, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});

    if (result.status === 400) {
        $("#fullName, #className, #birthDate, #address, #enrollDate").prop("disabled", false);
        $("#saveBtn, #resetBtn").prop("disabled", false);
        $("#updateBtn").prop("disabled", true);
        $("#fullName").focus();
    } else if (result.status === 200) {
        let parsedData = JSON.parse(result.data);
        currentRecNo = parsedData.rec_no; 
        let data = parsedData.record;
        
        $("#fullName").val(data["Full-Name"]);
        $("#className").val(data["Class"]);
        $("#birthDate").val(data["Birth-Date"]);
        $("#address").val(data["Address"]);
        $("#enrollDate").val(data["Enrollment-Date"]);
        
        $("#rollNo").prop("disabled", true);
        $("#fullName, #className, #birthDate, #address, #enrollDate").prop("disabled", false);
        $("#updateBtn, #resetBtn").prop("disabled", false);
        $("#saveBtn").prop("disabled", true);
        
        $("#fullName").focus();
        showInfinityAlert("Record Found. Ready for modification.", "success");
    }
}

function saveData() {
    if (!validateData()) return;
    
    let jsonStr = JSON.stringify({
        "Roll-No": $("#rollNo").val().trim(), 
        "Full-Name": $("#fullName").val().trim(), 
        "Class": $("#className").val().trim(),
        "Birth-Date": $("#birthDate").val().trim(), 
        "Address": $("#address").val().trim(), 
        "Enrollment-Date": $("#enrollDate").val().trim()
    });
    
    let putReq = createPUTRequest(token, jsonStr, dbName, relName);
    executeCommandAtGivenBaseUrl(putReq, jpdbBaseURL, jpdbIML);
    
    showInfinityAlert("Student Data Saved Successfully!", "success");
    resetForm();
}

function updateData() {
    if (!validateData()) return;
    
    let jsonStr = JSON.stringify({
        "Full-Name": $("#fullName").val().trim(), 
        "Class": $("#className").val().trim(),
        "Birth-Date": $("#birthDate").val().trim(), 
        "Address": $("#address").val().trim(), 
        "Enrollment-Date": $("#enrollDate").val().trim()
    });
    
    let updateReq = createUPDATERecordRequest(token, jsonStr, dbName, relName, currentRecNo);
    executeCommandAtGivenBaseUrl(updateReq, jpdbBaseURL, jpdbIML);
    
    showInfinityAlert("Student Data Updated Successfully!", "success");
    resetForm();
}

$(document).ready(function() {
    resetForm();
});