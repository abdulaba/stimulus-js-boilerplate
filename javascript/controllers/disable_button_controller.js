import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["button", "link"]
    connect() {
        console.log("Hello from controller");
    }

    disable() {
        this.buttonTarget.setAttribute("disabled","")
        this.buttonTarget.innerText = "Bingo"
        this.linkTarget.classList.remove("d-none")
    }

    reset() {
        this.linkTarget.classList.add("d-none")
        this.buttonTarget.removeAttribute("disabled","")
        this.buttonTarget.innerText = "Click me!"
    }
}