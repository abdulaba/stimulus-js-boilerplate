import { Controller } from "stimulus"

export default class extends Controller {

    connect() {
        console.log("Hello from controller");
    }

    disable() {
        this.element.setAttribute("disabled","")
        this.element.innerText = "Bingo"
    }
}