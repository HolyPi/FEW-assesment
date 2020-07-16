const template = document.createElement('template')
template.innerHTML = `
    <style>
    .main-text > h1 {
        animation-name: move
        animation-duration: 1s;
        transition: all 500ms cubic-bezier(0.550, 0.085, 0.680, 0.530); 

    }

    @keyframes move {
        0% { left: 0;}
        55% { left: 50%;}
        60% { left: 100%; }
        80% { left: 50%; }
        100% { left: 0;}

    }
    `

class Ticker extends HTMLElement {
        constructor() {
          super();
        const tempNode = template.content.cloneNode(true)
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(tempNode)
     }
    }

customElements.define('ticker', Ticker)