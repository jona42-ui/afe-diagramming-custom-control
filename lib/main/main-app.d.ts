import { LitElement } from 'lit';
import '../afe-diagram-embed';
export declare class MainElement extends LitElement {
    static styles: import("lit").CSSResultGroup;
    question: {
        extras: {
            type: string;
            label: string;
            id: string;
            required: string;
            default: string;
            questionOptions: {
                rendering: string;
                customControl: boolean;
                answers: {
                    concept: string;
                    label: string;
                }[];
            };
            customControlConfig: {
                tag: string;
                url: string;
                module: string;
            };
        };
        renderingType: string;
        key: string;
        label: string;
        validators: any[];
        required: string;
        options: {
            label: string;
            value: string;
        }[];
        controlType: number;
        dataSource: string;
        conponentConfigs: any[];
    };
    componentConfig: {
        type: string;
        label: string;
        id: string;
        required: string;
        default: string;
        questionOptions: {
            rendering: string;
            answers: {
                concept: string;
                label: string;
            }[];
        };
    };
    diagramData: {
        imageUrl: string;
    };
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    handleDiagramAnnotated(event: any): void;
}
//# sourceMappingURL=main-app.d.ts.map