class popover {
  constructor() {
    this.popButton = document.querySelector(".btn");
    this.popButton.onclick = (ev) => {
      ev.preventDefault();
      if (this.checkState()) {
        this.closeElem();
      } else {
        this.showElem();
      }
    };
  }

  showElem() {
    const a = document.createElement("div");
    a.classList.add("arrow");
    a.insertAdjacentHTML(
      "beforeend",
      /* eslint-disable no-useless-escape */
      `<p>Popover title</p><hr><p>And here\'s some amazing content. It\'s very engaging. Right?</p>`
    );
    document.body.appendChild(a);

    const popParams = this.popButton.getBoundingClientRect();
    a.style.left =
      popParams.left +
      popParams.width / 2 -
      a.getBoundingClientRect().width / 2 +
      "px";
    a.style.bottom =
      popParams.height + a.getBoundingClientRect().height + 10 + "px";

    console.log(a.getBoundingClientRect());
    console.log(this.popButton.getBoundingClientRect());
  }

  closeElem() {
    document.body.removeChild(this.arrow);
  }

  checkState() {
    this.arrow = document.body.querySelector(".arrow")
    if (document.body.contains(this.arrow)) {
      return true;
    } else {
      return false;
    }
  }
}

new popover();
