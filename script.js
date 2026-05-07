function openStep(step) {
  let content = "";

  if (step === "define") {
    content = `
      <h2>Define Entity</h2>
      <p><b>Objective:</b> Clarify purpose</p>
      <p><b>Inputs:</b> Request, Use Case</p>
      <p><b>Actions:</b> Validate need</p>
      <p><b>Output:</b> Entity Definition</p>
    `;
  }

  if (step === "data") {
    content = `
      <h2>Data Validation</h2>
      <p>Identify sources, validate usage, detect gaps.</p>
    `;
  }

  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}