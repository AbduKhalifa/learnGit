const app = {
    myInput: document.getElementById("textInput"),
    myDisplayArea: document.getElementById("playGround"),
    setTheEvent() {
        this.myInput.addEventListener("keyup", ({ target }) => {

            this.myDisplayArea.innerHTML = target.value
        });
    },

}
app.setTheEvent();