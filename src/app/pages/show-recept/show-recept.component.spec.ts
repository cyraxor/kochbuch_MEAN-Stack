import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReceptComponent } from './show-recept.component';

describe('ShowReceptComponent', () => {
  let component: ShowReceptComponent;
  let fixture: ComponentFixture<ShowReceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
