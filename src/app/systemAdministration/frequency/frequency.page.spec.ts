import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrequencyPage } from './frequency.page';

describe('FrequencyPage', () => {
  let component: FrequencyPage;
  let fixture: ComponentFixture<FrequencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrequencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
