import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptsComponent } from './recepts.component';

describe('ReceptsComponent', () => {
  let component: ReceptsComponent;
  let fixture: ComponentFixture<ReceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
