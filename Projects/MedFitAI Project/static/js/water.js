// // ==========================
// // Water Intake Calculator
// // ==========================

// // Open Water Tool

// function openWater(){

//     document
//     .getElementById("waterPanel")
//     .style.display="flex";

// }

// // Close Water Tool

// function closeWater(){

//     document
//     .getElementById("waterPanel")
//     .style.display="none";

// }

// // Calculate Water

// async function calculateWater(){

//     let weight =

//     document
//     .getElementById("waterWeight")
//     .value;

//     if(weight===""){

//         alert("Enter your weight");

//         return;

//     }

//     try{

//         let response =

//         await fetch("/water",

//         {

//             method:"POST",

//             headers:{

//                 "Content-Type":
//                 "application/json"

//             },

//             body:

//             JSON.stringify({

//                 weight:weight

//             })

//         });

//         let data =

//         await response.json();

//         document

//         .getElementById("waterResult")
//         .innerHTML=

// `
// <h3>
// Daily Water Requirement
// </h3>

// <p>
// ${data.liters} litres/day
// </p>

// <p>
// Approximately ${data.glasses} glasses
// </p>

// <p>
// ${data.answer}
// </p>

//         `;

//     }

//     catch(error){

//         console.log(error);

//         document

//         .getElementById("waterResult")

//         .innerHTML=

//         "Unable to calculate water intake";

//     }

// }

// // water.js

// function openWater() {
//     const modal = document.getElementById("waterModal");
//     if (modal) modal.style.display = "flex";
// }

// function closeWater() {
//     const modal = document.getElementById("waterModal");
//     if (modal) modal.style.display = "none";
// }

// async function calculateWater() {
//     let weight = document.getElementById("waterWeight").value;
//     let activity = document.getElementById("activity").value;
//     let climate = document.getElementById("climate").value;

//     if (weight === "") {
//         alert("Please enter your weight");
//         return;
//     }

//     try {
//         let response = await fetch("/water", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 weight: weight,
//                 activity: activity,
//                 climate: climate
//             })
//         });

//         let data = await response.json();

//         // Replace document.getElementById("waterResult").innerHTML line in calculateWater()
//         document.getElementById("waterResult").innerHTML = `
//             <div class="result-card-header">
//                 <span class="result-card-title">Daily Hydration Target</span>
//                 <span class="result-badge">${data.glasses || '8'} Glasses</span>
//             </div>
//             <div class="result-main-value">${data.liters || data.water_intake || '2.5'} Liters / Day</div>
//             <p class="result-description">Increase fluid intake during intense workouts or warm weather.</p>
//         `;
//     } catch (error) {
//         console.error(error);
//         document.getElementById("waterResult").innerHTML = "Unable to calculate water intake";
//     }
// }

// // Attach Event Listeners on Load
// document.addEventListener("DOMContentLoaded", () => {
//     const openBtn = document.getElementById("openWater");
//     const closeBtn = document.querySelector(".closeWater");
//     const calcBtn = document.getElementById("calculateWater");

//     if (openBtn) openBtn.onclick = openWater;
//     if (closeBtn) closeBtn.onclick = closeWater;
//     if (calcBtn) calcBtn.onclick = calculateWater;
// });

// function openWater() {
//     console.log("Opening Water Modal...");
//     const modal = document.getElementById("waterModal");
//     if (modal) {
//         modal.style.display = "flex";
//     } else {
//         console.error("waterModal element not found!");
//     }
// }

// function closeWater() {
//     const modal = document.getElementById("waterModal");
//     if (modal) modal.style.display = "none";
// }

// async function calculateWater(e) {
//     if (e) e.preventDefault();

//     let weight = document.getElementById("waterWeight")?.value;
//     let activity = document.getElementById("activity")?.value || "low";
//     let climate = document.getElementById("climate")?.value || "normal";

//     if (!weight) {
//         alert("Please enter your weight");
//         return;
//     }

//     try {
//         let response = await fetch("/water", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ weight: weight, activity: activity, climate: climate })
//         });

//         let data = await response.json();
//         let result = document.getElementById("waterResult");
//         if (result) {
//             result.innerHTML = `
//                 <div class="result-card-header">
//                     <span class="result-card-title">Daily Hydration Target</span>
//                     <span class="result-badge">${data.glasses || '8'} Glasses</span>
//                 </div>
//                 <div class="result-main-value">${data.liters || data.water_intake || '2.5'} Liters / Day</div>
//                 <p class="result-description">Increase fluid intake during intense workouts or warm weather.</p>
//             `;
//         }
//     } catch (error) {
//         console.error("Water Error:", error);
//     }
// }

// // Global Event Delegation
// document.addEventListener("click", function (e) {
//     if (e.target && e.target.id === "openWater") openWater();
//     if (e.target && e.target.classList.contains("closeWater")) closeWater();
//     if (e.target && e.target.id === "calculateWater") calculateWater(e);
// });

// // ==========================================
// // WATER CALCULATOR LOGIC
// // ==========================================

// function openWater() {
//     const modal = document.getElementById("waterModal");
//     if (modal) modal.style.display = "flex";
// }

// function closeWater() {
//     const modal = document.getElementById("waterModal");
//     if (modal) modal.style.display = "none";
// }

// async function calculateWater(e) {
//     if (e) e.preventDefault();

//     let weight = document.getElementById("waterWeight")?.value;
//     let activity = document.getElementById("activity")?.value || "low";
//     let climate = document.getElementById("climate")?.value || "normal";

//     if (!weight) {
//         alert("Please enter your weight");
//         return;
//     }

//     try {
//         let response = await fetch("/water", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ weight: weight, activity: activity, climate: climate })
//         });

//         let data = await response.json();
//         let result = document.getElementById("waterResult");
//         if (result) {
//             result.innerHTML = `
//                 <div class="result-card-header">
//                     <span class="result-card-title">Daily Hydration Target</span>
//                     <span class="result-badge">${data.glasses || '8'} Glasses</span>
//                 </div>
//                 <div class="result-main-value">${data.liters || data.water_intake || '2.5'} Liters / Day</div>
//                 <p class="result-description">Increase fluid intake during intense workouts or warm weather.</p>
//             `;
//         }
//     } catch (error) {
//         console.error("Water Error:", error);
//         let result = document.getElementById("waterResult");
//         if (result) result.innerHTML = "Unable to calculate water intake";
//     }
// }

// // Event Listeners for Water Calculator
// document.addEventListener("click", function (e) {
//     const target = e.target;
//     if (!target) return;

//     if (target.id === "openWater") openWater();
//     if (target.classList.contains("closeWater")) closeWater();
//     if (target.id === "calculateWater") calculateWater(e);
// });

// ==========================================
// WATER CALCULATOR LOGIC
// ==========================================

function openWater() {
  const modal = document.getElementById("waterModal");
  if (modal) modal.style.display = "flex";
}

function closeWater() {
  const modal = document.getElementById("waterModal");
  if (modal) modal.style.display = "none";
}

async function calculateWater(e) {
  if (e) e.preventDefault();

  let weight = document.getElementById("waterWeight")?.value;
  let activity = document.getElementById("activity")?.value || "low";
  let climate = document.getElementById("climate")?.value || "normal";

  if (!weight) {
    alert("Please enter your weight");
    return;
  }

  try {
    let response = await fetch("/water", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weight: weight,
        activity: activity,
        climate: climate,
      }),
    });

    let data = await response.json();
    let result = document.getElementById("waterResult");
    if (result) {
      result.innerHTML = `
                <div class="result-card-header">
                    <span class="result-card-title">Daily Hydration Target</span>
                    <span class="result-badge">${data.glasses || "8"} Glasses</span>
                </div>
                <div class="result-main-value">${data.liters || data.water_intake || "2.5"} Liters / Day</div>
                <p class="result-description">Increase fluid intake during intense workouts or warm weather.</p>
            `;
    }
  } catch (error) {
    console.error("Water Error:", error);
    let result = document.getElementById("waterResult");
    if (result) result.innerHTML = "Unable to calculate water intake";
  }
}

// Event Listeners for Water Calculator
document.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;

  if (target.id === "openWater" || target.closest("#openWater")) openWater();
  if (target.classList.contains("closeWater")) closeWater();
  if (target.id === "calculateWater") calculateWater(e);
});
