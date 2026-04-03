const updateOptions = function(optionValues) {
    const selectEnableWatch = document.getElementById("selectEnableWatchpoints");
    selectEnableWatch.value = optionValues.enableWatchpoints;

    const selectLogLevel = document.getElementById("selectLogLevel");
    selectLogLevel.value = optionValues.logLevel;

    const rangeWPCount = document.getElementById("rangeWPCount");
    rangeWPCount.value = optionValues.value;

    const selectDiagnosticLevel = document.getElementById("selectDiagnosticLevel");
    if (optionValues.diagnosticLevel !== undefined && optionValues.diagnosticLevel !== "") {
        selectDiagnosticLevel.value = optionValues.diagnosticLevel;
    } else if (optionValues.passthroughMode === "true" || optionValues.passthroughMode === true) {
        selectDiagnosticLevel.value = "0";
    } else {
        selectDiagnosticLevel.value = "";
    }
}

document.getElementById("buttonSaveOptions").onclick = function() {
    const newOptions = {};

    const selectLogLevel = document.getElementById("selectLogLevel");
    newOptions.logLevel = selectLogLevel.value;

    const selectEnableWatch = document.getElementById("selectEnableWatchpoints");
    newOptions.enableWatchpoints = selectEnableWatch.value;

    const rangeWPCount = document.getElementById("rangeWPCount");
    newOptions.wpCount = rangeWPCount.value;

    const selectDiagnosticLevel = document.getElementById("selectDiagnosticLevel");
    const diagLevel = selectDiagnosticLevel.value;
    if (diagLevel !== "") {
        newOptions.diagnosticLevel = diagLevel;
        // Level 0 also sets passthroughMode for backwards compat
        newOptions.passthroughMode = diagLevel === "0" ? "true" : "false";
    } else {
        newOptions.diagnosticLevel = "";
        newOptions.passthroughMode = "false";
    }

    saveOptions(newOptions);

    const btn = document.getElementById("buttonSaveOptions");
    btn.textContent = "Saved!";
    btn.style.background = "#2ecc71";
    btn.style.borderColor = "#2ecc71";
    setTimeout(function() {
        btn.textContent = "Save";
        btn.style.background = "";
        btn.style.borderColor = "";
    }, 1500);
}

document.getElementById("rangeWPCount").oninput = function(e) {
    document.getElementById("outputWPCount").innerText = e.target.value;
}

loadOptions(updateOptions);
