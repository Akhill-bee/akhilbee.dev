class AkhilbeeFooter extends HTMLElement {
  connectedCallback() {
    // Avoid double rendering if attached multiple times
    if (this.shadowRoot) return;

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          margin-top: auto;
        }

        footer {
          background-color: #032b53; /* Deep blue background */
          border-top: 4px solid #0284c7; /* Top accent bar */
          padding: 20px 32px;class AkhilbeeFooter extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          margin-top: auto;
        }

        footer {
          /* Uses Light Mode background #EFEFD0 or Dark Mode #004E89 */
          background-color: var(--bg-color, #EFEFD0); 
          
          /* Uses Light Mode heading #FF6B35 or Dark Mode #1A659E as top border accent */
          border-top: 4px solid var(--heading-color, #FF6B35); 
          
          padding: 20px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .left-content {
          display: flex;
          align-items: center;
          gap: 10px;
          
          /* Uses Light Mode subheading #F7C59F or Dark Mode #75BBF1 */
          color: var(--subheading-color, #F7C59F); 
          
          font-size: 0.95rem;
          font-weight: 500;
        }

        .heart-icon {
          width: 20px;
          height: 20px;
          
          /* Icon stroke matches the subheading color dynamically */
          stroke: var(--subheading-color, #F7C59F); 
          
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.3s ease;
        }

        .right-content a {
          /* Uses Light Mode heading #FF6B35 or Dark Mode #75BBF1 for link contrast */
          color: var(--heading-color, #FF6B35); 
          text-decoration: underline;
          font-size: 0.95rem;
          font-weight: 600;
          transition: color 0.15s ease;
        }

        .right-content a:hover {
          opacity: 0.8;
        }
      </style>

      <footer>
        <div class="left-content">
          <svg class="heart-icon" viewBox="0 0 24 24">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          <span>An Akhilbee.dev project</span>
        </div>

        <div class="right-content">
          <a href="https://home.akhilbee.dev">home.akhilbee.dev</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('akhilbee-footer', AkhilbeeFooter);
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .left-content {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .heart-icon {
          width: 20px;
          height: 20px;
          stroke: #94a3b8;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .right-content a {
          color: #38bdf8;
          text-decoration: underline;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.15s ease;
        }

        .right-content a:hover {
          color: #7dd3fc;
        }
      </style>

      <footer>
        <div class="left-content">
          <svg class="heart-icon" viewBox="0 0 24 24">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          <span>An Akhilbee.dev project</span>
        </div>

        <div class="right-content">
          <a href="https://home.akhilbee.dev">home.akhilbee.dev</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('akhilbee-footer', AkhilbeeFooter);
