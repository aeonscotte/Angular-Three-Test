import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsContainerComponent } from './threejs-container.component';

describe('ThreejsContainerComponent', () => {
  let component: ThreejsContainerComponent;
  let fixture: ComponentFixture<ThreejsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreejsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreejsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
