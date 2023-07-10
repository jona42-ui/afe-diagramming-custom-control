import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './main.scss';
import '../afe-diagram-embed';
import { AfeDiagramEmbedComponent } from '../afe-diagram-embed/afe-diagram-embed.component';


@customElement('main-app')
export class MainElement extends LitElement {
  static styles = styles;
  question = { "extras": { "type": "obs", "label": "Custom Control Test:", "id": "customCon", "required": "true", "default": "", "questionOptions": { "rendering": "select", "customControl": true, "answers": [{ "concept": "8b715fed-97f6-4e38-8f6a-c167a42f8923", "label": "yes" }, { "concept": "a899e0ac-1350-11df-a1f1-0026b9348838", "label": "No" }] }, "customControlConfig": { "tag": "afe-content-switcher", "url": "http://localhost:4200/lib/web-components.bundled.js?module", "module": "true" } }, "renderingType": "select", "key": "customCon", "label": "Custom Control Test:", "validators": [], "required": "true", "options": [{ "label": "", "value": "" }, { "label": "yes", "value": "8b715fed-97f6-4e38-8f6a-c167a42f8923" }, { "label": "No", "value": "a899e0ac-1350-11df-a1f1-0026b9348838" }], "controlType": 0, "dataSource": "", "conponentConfigs": [] };

  componentConfig = {
    "type": "component",
    "label": "Custom Control Test:",
    "id": "customCon",
    "required": "true",
    "default": "",
    "questionOptions": {
      "rendering": "custom",
      "answers": [
        {
          "concept": "8b715fed-97f6-4e38-8f6a-c167a42f8923",
          "label": "yes"
        },
        {
          "concept": "a899e0ac-1350-11df-a1f1-0026b9348838",
          "label": "No"
        }
      ]
    },
    
  };

  

  diagramData = {
    // properties specific to the diagram component
    imageUrl: 'https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-dog-corgi-short-legged-animal-transparent-on-white-background-png-image_6655763.png',
    
  };


  constructor() {
    super();
  }

  render() {
    return html`
    <div class="bx--grid">
      <div class="bx--row">
        <afe-diagram-embed
          .value=${this.diagramData}
          .question=${this.question}
          @${AfeDiagramEmbedComponent.diagramAnnotatedEvent}=${this.handleDiagramAnnotated}
        ></afe-diagram-embed>
      </div>
    </div>
  `;
  }

  handleDiagramAnnotated(event) {
    const annotatedData = event.detail.diagramData;
    const metadata = event.detail.metadata;
  
    // Integrate the annotated data with the form submission process, e.g., update form fields or submit the data
    // ...
  }
  
}