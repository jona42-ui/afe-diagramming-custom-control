import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('afe-diagram-embed')
export class AfeDiagramEmbedComponent extends LitElement {
  @property({ type: String })
  imageUrl: string;

  @property({ type: Object })
  diagramData: any;

  @property({ type: Object })
  question: any;

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <div>
        <img src="${this.imageUrl}" alt="Diagram"> <!-- Display the diagram image -->
  
        <button @click=${this.handleAnnotationClick} ?disabled=${this.disabled}>
          Annotate Diagram
        </button>
      </div>
    `;
  }

  static get diagramAnnotatedEvent() {
    return 'diagram-annotated';
  }
  

  handleAnnotationClick() {
    // Retrieve the diagram data and metadata
    const diagramData = this.diagramData;
    const metadata = this.question.metadata; // Make sure the question object is accessible in this component

    // Construct the query parameters string
    const queryParams = new URLSearchParams();
    queryParams.append('diagramData', diagramData);
    queryParams.append('metadata', JSON.stringify(metadata));

    // Construct the URL of the external application with the query parameters
    const externalAppURL = `https://example.com/annotation-tool?${queryParams.toString()}`;

    
    // Open the external application in a new window/tab
    window.open(externalAppURL, '_blank');

    // Emit the custom event with the annotated data to indicate that the diagram has been annotated
    this.dispatchEvent(new CustomEvent(AfeDiagramEmbedComponent.diagramAnnotatedEvent, {
      detail: {
        diagramData: diagramData,
        metadata: metadata,
      },
    }));
  }
}
