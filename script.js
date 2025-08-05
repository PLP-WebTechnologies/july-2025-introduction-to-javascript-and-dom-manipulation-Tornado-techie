// --- Part 1: Variable Declarations and Conditionals ---
let isCertified = true;
let auditScore = 85; // out of 100

if (auditScore >= 80 && isCertified) {
    console.log("Company is ISO Compliant.");
} else {
    console.log("Company needs to improve compliance.");
}

// --- Part 2: Custom Functions ---
function calculateRisk(score) {
    if (score >= 80) {
        return "Low Risk";
    } else if (score >= 60) {
        return "Moderate Risk";
    } else {
        return "High Risk";
    }
}

function displayComplianceMessage() {
    let resultSection = document.getElementById("result");
    if (isCertified && auditScore >= 80) {
        resultSection.innerHTML = "<span style='color:green;'>You are ISO Compliant ✅</span>";
    } else {
        resultSection.innerHTML = "<span style='color:red;'>Non-Compliant ❌ - Please address audit findings.</span>";
    }
}

// --- Part 3: Loop Examples ---
let departments = ["Production", "Quality Control", "Logistics", "Sales"];

// Example 1: For Loop
for (let i = 0; i < departments.length; i++) {
    console.log(`Auditing Department: ${departments[i]}`);
}

// Example 2: forEach Loop
departments.forEach(dept => {
    console.log(`Department: ${dept} - Audit Scheduled`);
});

// --- Part 4: DOM Interactions ---
document.getElementById("checkCompliance").addEventListener("click", function() {
    displayComplianceMessage();  // DOM Update on Click
});

document.body.style.backgroundColor = "#f9f9f9"; // Change background via DOM

let header = document.querySelector("header h1");
header.style.borderBottom = "3px solid green";  // Dynamic Header Border
