const updateOptions = function(optionValues) {
    const selectEnableWatch = document.getElementById("selectEnableWatchpoints");
    selectEnableWatch.value = optionValues.enableWatchpoints;

    const selectLogLevel = document.getElementById("selectLogLevel");
    selectLogLevel.value = optionValues.logLevel;

    const rangeWPCount = document.getElementById("rangeWPCount");
    rangeWPCount.value = optionValues.value;

    const checkPassthrough = document.getElementById("checkPassthrough");
    checkPassthrough.checked = optionValues.passthroughMode === "true" || optionValues.passthroughMode === true;
}

document.getElementById("buttonSaveOptions").onclick = function() {
    const newOptions = {};

    const selectLogLevel = document.getElementById("selectLogLevel");
    newOptions.logLevel = selectLogLevel.value;

    const selectEnableWatch = document.getElementById("selectEnableWatchpoints");
    newOptions.enableWatchpoints = selectEnableWatch.value;

    const rangeWPCount = document.getElementById("rangeWPCount");
    newOptions.wpCount = rangeWPCount.value;

    const checkPassthrough = document.getElementById("checkPassthrough");
    newOptions.passthroughMode = checkPassthrough.checked ? "true" : "false";

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
