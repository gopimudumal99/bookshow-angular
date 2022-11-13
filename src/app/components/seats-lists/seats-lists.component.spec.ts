import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsListsComponent } from './seats-lists.component';

describe('SeatsListsComponent', () => {
  let component: SeatsListsComponent;
  let fixture: ComponentFixture<SeatsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
