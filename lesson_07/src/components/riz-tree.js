import { LitElement, html, css } from 'lit-element';

class TreeL extends LitElement {

    static get is() { return 'tree-leaf';}

    static get styles() {
        return css`
            li {
              padding-left: 8px;
            }
            .caret {
              cursor: pointer;
              user-select: none;
            }
            .caret::before {
              content: "\\25B6";
              color: black;
              display: inline-block;
              margin-right: 6px;
            }
            .caret-down::before {
              transform: rotate(90deg);  
            }
            .active {
              display: block;
            }
            .nested {
              display: none;
            }
        `;
    }
    tg(event) {
        this.classList.toggle("caret-down");
    }
    render() {
        return html`<li @click=${this.tg}><slot></slot></li>`;
    }
}
customElements.define(TreeL.is, TreeL);

class TreeN extends LitElement {

    static get is() { return 'tree-node';}

    static get properties() {
        return {
            data: { type: Object }
        };
    }

    static get styles() {
        return css`
            ul {
              list-style-type: none;
              padding-left: 16px;
            }
            .active {
              display: block;
            }
            .nested {
              display: none;
            }
            .caret {
              cursor: pointer;
              user-select: none;
            }
            .caret::before {
              content: "\\25B6";
              color: black;
              display: inline-block;
              margin-right: 6px;
            }
            .caret-down::before {
              transform: rotate(90deg);  
            }    
            tree-leaf {
              display: flex;  
            }        
        `;
    }

    /*ОБХОД ВХОДЯЩЕГО JSONa*/
    builder(p_data) {
        return html`<tree-leaf class=${p_data.children ? "caret" : ""}><span>${p_data.name}</span></tree-leaf>
            ${p_data.children ? html`<ul class="active">${p_data.children.map(e => this.builder(e))}</ul>` : ``}
        `;
    }

    render() {
        return html`<ul>${this.builder(this.data)}</ul>`;
    }
}
customElements.define(TreeN.is, TreeN);
