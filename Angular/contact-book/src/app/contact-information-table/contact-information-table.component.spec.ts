import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationTableComponent } from './contact-information-table.component';

describe('ContactInformationTableComponent', () => {
  let component: ContactInformationTableComponent;
  let fixture: ComponentFixture<ContactInformationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInformationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
