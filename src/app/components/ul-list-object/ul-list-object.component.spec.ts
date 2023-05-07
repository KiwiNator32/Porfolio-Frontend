import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlListObjectComponent } from './ul-list-object.component';

describe('UlListObjectComponent', () => {
  let component: UlListObjectComponent;
  let fixture: ComponentFixture<UlListObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlListObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlListObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
