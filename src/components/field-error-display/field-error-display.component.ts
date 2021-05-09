import { Component, Input } from "@angular/core";

@Component({
	selector: "app-field-error-display",
	templateUrl: "../../components/field-error-display/field-error-display.component.html",
	styleUrls: ["../../components/field-error-display/field-error-display.component.css"]
})
export class FieldErrorDisplayComponent {
	@Input() errorMsg: string;
	@Input() displayError: boolean;
}
