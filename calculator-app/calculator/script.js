    let historyEl = document.getElementById('history-value');
    let outputEl = document.getElementById('output-value');

    let resultDisplayed = false; 

    const getHistory = () => historyEl.innerText;
    const printHistory = (num) => historyEl.innerText = num;
    const getOutput = () => outputEl.innerText;
    const printOutput = (num) => {outputEl.innerText = num === "" ? num : getFormattedNumber(num);};

    const getFormattedNumber = (num) => num === "-" ? "" : num.toLocaleString("en");
    const reverseNumberFormat = (num) => Number(num.replace(/,/g, ''));

    document.querySelectorAll('.operator').forEach(btn => {
        btn.addEventListener('click', function () {
            let output = reverseNumberFormat(getOutput()).toString();
            let history = getHistory();

            if (this.id === "clear") {
                printHistory("");
                printOutput("");
                resultDisplayed = false;
            } else if (this.id === "backspace") {
                if (!resultDisplayed) {
                    printOutput(output.slice(0, -1));
                }
            } else {
                output = output || "";
                history = history || "";

                if (this.id === "=") {
                    let result = eval(history + output);
                    printOutput(result);
                    printHistory("");
                    resultDisplayed = true; 
                } else if (this.id === "%") {
                    let percent = reverseNumberFormat(output) / 100;
                    printOutput(percent.toFixed(4));
                    resultDisplayed = true; 
                } else {
                    printHistory(history + output + this.id);
                    printOutput("");
                    resultDisplayed = false;
                }
            }
        });
    });

    document.querySelectorAll('.number, #dot').forEach(btn => {
        btn.addEventListener('click', function () {
            let output = getOutput();
            if (resultDisplayed) {
                if (this.innerText === ".") {
                    output = "0."; 
                } else {
                    output = this.innerText;
                }
                resultDisplayed = false;
            } else {
                if (this.innerText === ".") {
                    if (!output.includes(".")) {
                        output += "0."; 
                    }
                } else {
                    output += this.innerText; 
                }
            }
            printOutput(output);
        });
    });
