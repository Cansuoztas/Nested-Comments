
import { comment } from "./comment.js";


sessionStorage.setItem("currentUser", "User");


window.customElements.define("comment-box", comment);
