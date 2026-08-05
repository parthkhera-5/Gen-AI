// // =======================
// // BMI Calculator
// // =======================

// // Open BMI Tool

// function openBMI(){

//     document
//     .getElementById("bmiModal")
//     .style.display="flex";

// }

// // Close BMI Tool

// function closeBMI(){

//     document
//     .getElementById("bmiModal")
//     .style.display="none";

// }

// // Calculate BMI

// async function calculateBMI(){

//     let weight =
//     document
//     .getElementById("weight")
//     .value;

//     let height =
//     document
//     .getElementById("height")
//     .value;

//     if(weight==="" || height===""){

//         alert("Please enter weight and height");

//         return;

//     }

//     try{

//         let response =
//         await fetch("/bmi",
//         {

//             method:"POST",

//             headers:{

//                 "Content-Type":
//                 "application/json"

//             },

//             body:
//             JSON.stringify({

//                 weight:weight,

//                 height:height

//             })

//         });

//         let data =
//         await response.json();

//         document
//         .getElementById("bmiResult")
//         .innerHTML=

//         `
//         <h3>BMI : ${data.bmi}</h3>

//         <p>
//         Category :
//         ${data.category}
//         </p>
//         `;

//     }

//     catch(error){

//         console.log(error);

//         document
//         .getElementById("bmiResult")
//         .innerHTML=
//         "Unable to calculate BMI";

//     }

// }

// // bmi.js

// function openBMI() {
//     const modal = document.getElementById("bmiModal");
//     if (modal) modal.style.display = "flex";
// }

// function closeBMI() {
//     const modal = document.getElementById("bmiModal");
//     if (modal) modal.style.display = "none";
// }

// async function calculateBMI() {
//     let weight = document.getElementById("weight").value;
//     let height = document.getElementById("height").value;

//     if (weight === "" || height === "") {
//         alert("Please enter weight and height");
//         return;
//     }

//     try {
//         let response = await fetch("/bmi", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ weight: weight, height: height })
//         });

//         let data = await response.json();

//         // Replace document.getElementById("bmiResult").innerHTML line in calculateBMI()
//         document.getElementById("bmiResult").innerHTML = `
//             <div class="result-card-header">
//                 <span class="result-card-title">BMI Score</span>
//                 <span class="result-badge">${data.category || 'Calculated'}</span>
//             </div>
//             <div class="result-main-value">${data.bmi}</div>
//             <p class="result-description">A healthy BMI ranges between 18.5 and 24.9 kg/m².</p>
//         `;
//     } catch (error) {
//         console.error(error);
//         document.getElementById("bmiResult").innerHTML = "Unable to calculate BMI";
//     }
// }

// // Attach Event Listeners on Load
// document.addEventListener("DOMContentLoaded", () => {
//     const openBtn = document.getElementById("openBMI");
//     const closeBtn = document.querySelector(".closeBMI");
//     const calcBtn = document.getElementById("calculateBMI");

//     if (openBtn) openBtn.onclick = openBMI;
//     if (closeBtn) closeBtn.onclick = closeBMI;
//     if (calcBtn) calcBtn.onclick = calculateBMI;
// });

// // ==========================================
// // BMI CALCULATOR LOGIC
// // ==========================================

// function openBMI() {
//     const modal = document.getElementById("bmiModal");
//     if (modal) modal.style.display = "flex";
// }

// function closeBMI() {
//     const modal = document.getElementById("bmiModal");
//     if (modal) modal.style.display = "none";
// }

// async function calculateBMI(e) {
//     if (e) e.preventDefault();

//     let weight = document.getElementById("weight")?.value;
//     let height = document.getElementById("height")?.value;

//     if (!weight || !height) {
//         alert("Please enter weight and height");
//         return;
//     }

//     try {
//         let response = await fetch("/bmi", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ weight: weight, height: height })
//         });

//         let data = await response.json();
//         let result = document.getElementById("bmiResult");
//         if (result) {
//             result.innerHTML = `
//                 <div class="result-card-header">
//                     <span class="result-card-title">BMI Score</span>
//                     <span class="result-badge">${data.category || 'Calculated'}</span>
//                 </div>
//                 <div class="result-main-value">${data.bmi}</div>
//                 <p class="result-description">A healthy BMI ranges between 18.5 and 24.9 kg/m².</p>
//             `;
//         }
//     } catch (error) {
//         console.error("BMI Error:", error);
//         let result = document.getElementById("bmiResult");
//         if (result) result.innerHTML = "Unable to calculate BMI";
//     }
// }

// // Event Listeners for BMI
// document.addEventListener("click", function (e) {
//     const target = e.target;
//     if (!target) return;

//     if (target.id === "openBMI") openBMI();
//     if (target.classList.contains("closeBMI")) closeBMI();
//     if (target.id === "calculateBMI") calculateBMI(e);
// });

// ==========================================
// BMI CALCULATOR LOGIC
// ==========================================

function openBMI() {
  const modal = document.getElementById("bmiModal");
  if (modal) modal.style.display = "flex";
}

function closeBMI() {
  const modal = document.getElementById("bmiModal");
  if (modal) modal.style.display = "none";
}

async function calculateBMI(e) {
  if (e) e.preventDefault();

  let weight = document.getElementById("weight")?.value;
  let height = document.getElementById("height")?.value;

  if (!weight || !height) {
    alert("Please enter weight and height");
    return;
  }

  try {
    let response = await fetch("/bmi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weight: weight, height: height }),
    });

    let data = await response.json();
    let result = document.getElementById("bmiResult");
    if (result) {
      result.innerHTML = `
                <div class="result-card-header">
                    <span class="result-card-title">BMI Score</span>
                    <span class="result-badge">${data.category || "Calculated"}</span>
                </div>
                <div class="result-main-value">${data.bmi}</div>
                <p class="result-description">A healthy BMI ranges between 18.5 and 24.9 kg/m².</p>
            `;
    }
  } catch (error) {
    console.error("BMI Error:", error);
    let result = document.getElementById("bmiResult");
    if (result) result.innerHTML = "Unable to calculate BMI";
  }
}

// Event Listeners for BMI
document.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;

  if (target.id === "openBMI" || target.closest("#openBMI")) openBMI();
  if (target.classList.contains("closeBMI")) closeBMI();
  if (target.id === "calculateBMI") calculateBMI(e);
});
