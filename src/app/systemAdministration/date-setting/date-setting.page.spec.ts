import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateSettingPage } from './date-setting.page';

describe('DateSettingPage', () => {
  let component: DateSettingPage;
  let fixture: ComponentFixture<DateSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
