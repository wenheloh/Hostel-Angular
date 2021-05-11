import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { RoomTypeComponent } from "./room-type.component";

describe("RoomTypeComponent", () => {
	let component: RoomTypeComponent;
	let fixture: ComponentFixture<RoomTypeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RoomTypeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
