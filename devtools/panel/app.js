// Select all the buttons and page divs
const buttons = document.querySelectorAll("#btn");
const pages = document.querySelectorAll(".page");

// Hide all the page divs except for the first one
pages.forEach((page, index) => {
    if (index !== 0) {
        page.style.display = "none";
    }
});

// Add click event listeners to all the buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Hide all the page divs
        pages.forEach((page) => {
            page.style.display = "none";
        });
        // Show the page div that corresponds to the clicked button
        const pageName = button.getAttribute("data-page");
        const pageToShow = document.getElementById(`${pageName}`);
        pageToShow.style.display = "block";
    });
});

const formSubmit = document.getElementById("commandForm");
formSubmit.onsubmit = (e) => {
    e.preventDefault();
    const commandInput = document.getElementById("commandInput");
    sendCommand(commandInput.value);
    commandInput.value = "";
};

function sendCommand(value) {
    if (value === "") return;

    runCommand(value);

    function createUserMessage(command) {
        const userMessageWrapper = document.createElement("div");
        userMessageWrapper.classList.add("flex", "justify-end", "mb-4");

        const userMessage = document.createElement("div");
        userMessage.classList.add(
            "bg-blue-500",
            "text-white",
            "rounded-lg",
            "p-2",
            "max-w-xs",
            "break-words"
        );
        userMessage.innerText = command;

        userMessageWrapper.appendChild(userMessage);

        document
            .getElementById("customConsole")
            .appendChild(userMessageWrapper);
    }

    function createAnswer(result) {
        const consoleOutputWrapper = document.createElement("div");
        consoleOutputWrapper.classList.add("flex", "mb-4");

        const consoleOutput = document.createElement("div");
        consoleOutput.classList.add(
            "drop-shadow-md",
            "rounded-lg",
            "p-2",
            "max-w-xs",
            "break-words"
        );

        if (result.status === "success") {
            consoleOutput.classList.add(
                "bg-white",
                "text-white",
                "dark:bg-gray-900"
            );
        } else {
            consoleOutput.classList.add(
                "bg-white",
                "text-white",
                "dark:bg-red-600"
            );
        }

        const consoleOutputTimestamp = document.createElement("span");
        consoleOutputTimestamp.classList.add(
            "text-gray-500",
            "text-sm",
            "select-none"
        );
        const now = new Date();
        const options = {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        const formattedTime = now.toLocaleString("en-US", options);
        consoleOutputTimestamp.innerText = formattedTime;

        consoleOutput.appendChild(consoleOutputTimestamp);

        const consoleOutputText = document.createElement("p");
        consoleOutputText.classList.add("mt-0");
        consoleOutput.appendChild(consoleOutputText);
        consoleOutputWrapper.appendChild(consoleOutput);

        function getCircularReplacer() {
            const ancestors = [];
            return function (key, value) {
                if (typeof value !== "object" || value === null) {
                    return value;
                }
                while (ancestors.length > 0 && ancestors.at(-1) !== this) {
                    ancestors.pop();
                }
                if (ancestors.includes(value)) {
                    return "[Circular]";
                }
                ancestors.push(value);
                return value;
            };
        }

        const exampleResult = JSON.stringify(
            result.result,
            getCircularReplacer(),
            4
        );

        console.log("Example result: ", exampleResult);

        consoleOutputText.innerText = exampleResult;
        document
            .getElementById("customConsole")
            .appendChild(consoleOutputWrapper);
    }

    function runCommand(command) {
        createUserMessage(command);
        const executionResult = executeCommand(command);
        console.log("Execution result: ", executionResult);
        createAnswer(executionResult);
    }

    function executeCommand(command) {
        console.log("Running command: ", command);
        try {
            const func = new Function(`return ${command}`);
            const result = func();

            return { status: "success", result: result };
        } catch (error) {
            return { status: "error", result: error };
        }
    }
}

const commandInput = document.getElementById("commandInput");
commandInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.shiftKey) {
        // Add a new line instead of submitting the form
        e.preventDefault();
        const currentPosition = commandInput.selectionStart;
        const currentValue = commandInput.value;
        commandInput.value = `${currentValue.substring(
            0,
            currentPosition
        )}\n${currentValue.substring(currentPosition)}`;
    }
});

window.addEventListener("load", () => {
    const div = document.getElementById("commandDiv");
    div.scrollTop = div.scrollHeight;
});
