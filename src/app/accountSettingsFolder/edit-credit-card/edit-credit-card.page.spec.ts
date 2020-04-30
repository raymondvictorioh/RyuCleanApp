import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCreditCardPage } from './edit-credit-card.page';

describe('EditCreditCardPage', () => {
  let component: EditCreditCardPage;
  let fixture: ComponentFixture<EditCreditCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCreditCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCreditCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
