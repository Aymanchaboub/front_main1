import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtegorieCreateComponent } from './ctegorie-create.component';

describe('CtegorieCreateComponent', () => {
  let component: CtegorieCreateComponent;
  let fixture: ComponentFixture<CtegorieCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtegorieCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtegorieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
