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

  else if (step === "data") {
    content = `
      <h2>Data Validation</h2>
      <p>Check data sources, identify gaps, validate usage.</p>
    `;
  }

  document.getElementById("details").innerHTML = content;
}