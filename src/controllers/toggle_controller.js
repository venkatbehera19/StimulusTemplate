import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["toggleable"];
  connect() {
    console.log("Hello from JS controller");
  }
}