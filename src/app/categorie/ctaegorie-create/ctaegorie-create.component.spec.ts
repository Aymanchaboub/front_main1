import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaegorieCreateComponent } from './ctaegorie-create.component';

describe('CtaegorieCreateComponent', () => {
  let component: CtaegorieCreateComponent;
  let fixture: ComponentFixture<CtaegorieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaegorieCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaegorieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
