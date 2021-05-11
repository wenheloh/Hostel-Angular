import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { EditRoomTypeComponent } from "./edit-room-type.component";

describe("EditRoomTypeComponent", () => {
	let component: EditRoomTypeComponent;
	let fixture: ComponentFixture<EditRoomTypeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [EditRoomTypeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditRoomTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
