let promptInput = document.getElementById("prompt");
let output = document.getElementById("output");
let count = 0;
promptInput.focus()

function listen() {
promptInput.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        promptInput.readOnly = true;
        count += 1;
        if (promptInput.value.toLowerCase() == "help") {
            output.innerHTML = "Hello, welcome to my terminal web app!<br>help: Show this message.<br>projects: Lists my projects with a description."
        } else if (promptInput.value.toLowerCase() == "projects") {
            output.innerHTML = "1-bit Logic Gate Computer<br>This is my first PCB, A 1-bit computer that uses NOR and NOT gates made from 3<br>transistors as its processor, 3 Push buttons as input, and 2 LEDs as output.<br><br>Macro Microcontroller<br>A microcontroller and a macropad combined on a PCB which can be used for<br>controlling GPIO pins or running user programs instead of sending input to your<br>computer as a keyboard.<br><br>Nicholas' Code Editor<br>A simple HTML editor web app with an iframe renderer, open/save file,<br>boilerplate HTML code insertion and sharing function. Try it out at<br><a href='https://editor.nicholaslim.me'>https://editor.nicholaslim.me</a>!<br><br>Source Organiser<br>A user-friendly CLI file organiser for developers with more human-readable<br>commands. Project URL: <a href='https://pypi.org/project/source-organiser'>https://pypi.org/project/source-organiser</a>"
        }
        promptContain = document.createElement("div");
        promptContain.innerHTML = `<p>&gt;&gt;&nbsp;</p><input type="text" id="prompt${count}"></input>`
        promptContain.className = "input-contain"
        promptContain.readOnly = false;
        document.body.appendChild(promptContain)
        promptInput = document.getElementById(`prompt${count}`);
        promptInput.focus()
        output = document.createElement("p");
        output.id = `output${count}`
        document.body.appendChild(output)
        output = document.getElementById(`output${count}`)
        listen()
    }
})
}

listen()