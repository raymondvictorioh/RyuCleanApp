import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobSettingPage } from './job-setting.page';

describe('JobSettingPage', () => {
  let component: JobSettingPage;
  let fixture: ComponentFixture<JobSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
