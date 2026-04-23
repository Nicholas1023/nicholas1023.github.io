let promptInput = document.getElementById("prompt");
let output = document.getElementById("output");
let count = 0;
promptInput.focus();

function listen() {
promptInput.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        promptInput.readOnly = true;
        count += 1;
        if (promptInput.value.toLowerCase() == "help") {
            output.innerHTML = "about: Show information about this terminal.<br>clear: Clears the page by reloading.<br>help: Show this message.<br>projects: Lists my projects with a description."
        } else if (promptInput.value.toLowerCase() == "projects") {
            output.innerHTML = "1-bit Logic Gate Computer<br>This is my first PCB, A 1-bit computer that uses NOR and NOT gates made from 3<br>transistors as its processor, 3 Push buttons as input, and 2 LEDs as output.<br><br>Macro Microcontroller<br>A microcontroller and a macropad combined on a PCB which can be used for<br>controlling GPIO pins or running user programs instead of sending input to your<br>computer as a keyboard.<br><br>Nicholas' Code Editor<br>A simple HTML editor web app with an iframe renderer, open/save file,<br>boilerplate HTML code insertion and sharing function. Try it out at<br><a href='https://editor.nicholaslim.me'>https://editor.nicholaslim.me</a>!<br><br>Source Organiser<br>A user-friendly CLI file organiser for developers with more human-readable<br>commands. Project URL: <a href='https://pypi.org/project/source-organiser'>https://pypi.org/project/source-organiser</a>";
        } else if (promptInput.value.toLowerCase() == "clear") {
            window.location.reload();
        } else if (promptInput.value.toLowerCase() == "about") {
            output.innerHTML = `Nicholas' Terminal Version 0.0.1.<br>Source code: <a href='https://github.com/Nicholas1023/nicholas1023.github.io'>https://github.com/Nicholas1023/nicholas1023.github.io</a><br>User agent: ${navigator.userAgent}<br>Device platform: ${navigator.platform}<br>License: Copyright (c) 2025-2026 Nicholas Lim. <a href="/LICENSE.txt">View license</a>.`
        } else if (promptInput.value.toLowerCase() == "") {
            
        } else {
            output.innerHTML = `'${promptInput.value.toLowerCase()}' is not a valid command. Enter 'help' to get started!`;
        }
        promptContain = document.createElement("div");
        promptContain.innerHTML = `<p>&gt;&gt;&nbsp;</p><input type="text" id="prompt${count}" autocomplete="off"></input>`;
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
