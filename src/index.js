import c1_styles from "./c1.scss";
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(c1_styles);
    this.shadowRoot.adoptedStyleSheets = [styleSheet];

    this.shadowRoot.innerHTML = `
      <header>My Web Component</header>
      <section>
        <p>This is the content area of the web component.</p>
        <button id="toggleButton">Toggle Footer</button>
        <slot></slot> 
      </section>
      <footer id="footer">This is the footer</footer>
    `;

    this.toggleButton = this.shadowRoot.querySelector("#toggleButton");
    this.footer = this.shadowRoot.querySelector("#footer");

    this.toggleButton.addEventListener("click", () => {
      this.footer.classList.toggle("hidden");
    });
  }
}
customElements.define("my-component", MyComponent);

import c2_styles from "./c2.scss";
class MyOtherComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(c2_styles);
    this.shadowRoot.adoptedStyleSheets = [styleSheet];

    this.shadowRoot.innerHTML = `
        <header>The other web component</header>
      `;
  }
}
customElements.define("my-other-component", MyOtherComponent);
