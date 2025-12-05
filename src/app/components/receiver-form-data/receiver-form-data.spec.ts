import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverFormData } from './receiver-form-data';

describe('ReceiverFormData', () => {
  let component: ReceiverFormData;
  let fixture: ComponentFixture<ReceiverFormData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverFormData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverFormData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
