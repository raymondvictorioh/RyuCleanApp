import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastOrderPage } from './past-order.page';

describe('PastOrderPage', () => {
  let component: PastOrderPage;
  let fixture: ComponentFixture<PastOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
