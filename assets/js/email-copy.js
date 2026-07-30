(function () {
  "use strict";

  function fallbackCopy(text) {
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    var copied = document.execCommand("copy");
    document.body.removeChild(input);
    return copied;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return fallbackCopy(text)
      ? Promise.resolve()
      : Promise.reject(new Error("Clipboard access is unavailable"));
  }

  function showStatus(message) {
    var status = document.getElementById("email-copy-status");
    if (!status) return;

    status.textContent = message;
    status.classList.add("is-visible");
    window.clearTimeout(showStatus.timer);
    showStatus.timer = window.setTimeout(function () {
      status.classList.remove("is-visible");
    }, 2200);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var emailLinks = document.querySelectorAll(".author__email-copy");

    Array.prototype.forEach.call(emailLinks, function (link) {
      link.addEventListener("click", function (event) {
        var email = link.getAttribute("data-email");
        var label = link.querySelector(".author__email-label");
        event.preventDefault();

        if (label) label.textContent = email;
        link.classList.add("is-revealed");

        copyText(email).then(function () {
          showStatus("Email copied to clipboard");
        }).catch(function () {
          showStatus("Email shown — copy it manually");
        });
      });
    });
  });
}());
