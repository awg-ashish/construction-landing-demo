AOS.init();
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let cases = document.querySelector("#cases");
let blog = document.querySelector("#blog");
let contact = document.querySelector("#contact");
let home = document.querySelector("#home");
let logo = document.querySelector("#logo");
let down = document.querySelector("#down-pointer");

about.addEventListener("click", () => {
  Jump("#about-section");
});
cases.addEventListener("click", () => {
  Jump("#cases-section");
});
blog.addEventListener("click", () => {
  Jump("#blog-section");
});
contact.addEventListener("click", () => {
  Jump("#contact-section");
});
home.addEventListener("click", () => {
  Jump("#hero-text");
});
services.addEventListener("click", () => {
  Jump("#services-section");
});
logo.addEventListener("click", () => {
  Jump("#hero-text");
});
down.addEventListener("click", () => {
  Jump("#services-section");
});
