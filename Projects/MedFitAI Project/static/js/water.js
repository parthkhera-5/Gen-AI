

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
