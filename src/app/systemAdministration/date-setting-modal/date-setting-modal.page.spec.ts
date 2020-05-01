import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateSettingModalPage } from './date-setting-modal.page';

describe('DateSettingModalPage', () => {
  let component: DateSettingModalPage;
  let fixture: ComponentFixture<DateSettingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateSettingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
