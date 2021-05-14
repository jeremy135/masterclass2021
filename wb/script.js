
 
class MyComponent extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
    <style>

    </style>
    <h3>Hello kitty!</h3>
    <ul id="list">
    </ul>`;
  }

  get items() {
    return this.getAttribute('items');
  }
  
  static get observedAttributes() {
    return ['items'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {

  }

  render() {
    const itemList = JSON.parse(this.items);
    let listContent = '';
    itemList.forEach(element => {
      listContent += `<li>${element}</li>`;
    });

    this.shadowRoot.querySelector('#list').innerHTML = listContent;
  }
}
    
customElements.define('my-component', MyComponent);