import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNormalComponent } from './details-normal.component';

describe('DetailsNormalComponent', () => {
  let component: DetailsNormalComponent;
  let fixture: ComponentFixture<DetailsNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
