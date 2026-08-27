let promptInput = document.getElementById("prompt");
let output = document.getElementById("output");
let count = 0;
let currentDir = "~";
let availableDirs = ["terminal"];
let terminalFiles = ["icon.png", "index.html", "manifest.json", "script.js", "style.css"];
promptInput.focus();

function listen() {
    promptInput.addEventListener("keydown", function(e){
        if (e.key == "Enter") {
            promptInput.readOnly = true;
            command = promptInput.value.toLowerCase();
            count += 1;
            if (command == "help") {
                output.innerHTML = "about: Show information about this terminal.<br>cd: Change to specified directory.<br>clear: Clears the terminal by reloading.<br>help: Show this message.<br>ls: Lists all available directories.<br>projects: Lists my projects with a description.<br>&nbsp;";
            } else if (command == "projects") {
                output.innerHTML = "1-bit Logic Gate Computer<br>This is my first PCB, A 1-bit computer that uses NOR and NOT gates made from 3<br>transistors as its processor, 3 Push buttons as input, and 2 LEDs as output.<br><br>Macro Microcontroller 2<br>A microcontroller and a macropad combined on a PCB which can be used for<br>controlling GPIO pins or running user programs instead of sending input to your<br>computer as a keyboard.<br><br>Nicholas' Code Editor<br>A simple HTML editor web app with an iframe renderer, open/save file,<br>boilerplate HTML code insertion and sharing function. Try it out at<br><a href='https://editor.nicholaslim.me'>https://editor.nicholaslim.me</a>!<br><br>Source Organiser<br>A user-friendly CLI file organiser for developers with more human-readable<br>commands. Project URL: <a href='https://pypi.org/project/source-organiser'>https://pypi.org/project/source-organiser</a><br>&nbsp;";
            } else if (command == "clear") {
                window.location.reload();
            } else if (command == "about") {
                output.innerHTML = `Nicholas' Terminal Version 0.0.2.<br>Source code: <a href='https://github.com/Nicholas1023/nicholas1023.github.io'>https://github.com/Nicholas1023/nicholas1023.github.io</a><br>User agent: ${navigator.userAgent}<br>Device platform: ${navigator.platform}<br>License: Copyright (c) 2025-2026 Nicholas Lim. <a href="/LICENSE.txt">View license</a>.<br>&nbsp;`;
            } else if (command == "ls") {
                if (currentDir == "~") {
                    output.innerHTML = availableDirs.join("<br>") + "<br>&nbsp;";
                } else {
                    output.innerHTML = terminalFiles.join("<br>") + "<br>&nbsp;";
                }
            } else if (command.startsWith("cd", 0)) {
                if (availableDirs.includes(promptInput.value.slice(3)) || promptInput.value.slice(3) == "~") {
                    if (promptInput.value.slice(3) != "~") {
                        currentDir = `~/${promptInput.value.slice(3)}`;
                    } else {
                        currentDir = "~";
                    }
                } else if (promptInput.value.slice(3) == "") {
                    
                } else {
                    output.innerHTML = `Directory '${promptInput.value.slice(3)}' does not exist.<br>&nbsp;`;
                }
            } else if (promptInput.value == "") {

            } else {
                output.innerHTML = `'${promptInput.value.toLowerCase()}' is not a valid command. Enter 'help' to get started!<br>&nbsp;`;
            }
            promptContain = document.createElement("div");
            promptContain.innerHTML = `<p>[user@nicholaslim.me ${currentDir}/]&gt;&nbsp;</p><input type="text" id="prompt${count}" autocomplete="off"></input>`;
            promptContain.className = "input-contain";
            promptContain.readOnly = false;
            document.body.appendChild(promptContain);
            promptInput = document.getElementById(`prompt${count}`);
            promptInput.focus();
            output = document.createElement("p");
            output.id = `output${count}`;
            document.body.appendChild(output);
            output = document.getElementById(`output${count}`);
            listen();
        };
    });
};

listen();
