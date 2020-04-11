import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderPreferencePage } from './order-preference.page';

describe('OrderPreferencePage', () => {
  let component: OrderPreferencePage;
  let fixture: ComponentFixture<OrderPreferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPreferencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
