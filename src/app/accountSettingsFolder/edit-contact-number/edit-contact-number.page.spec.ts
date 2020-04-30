import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditContactNumberPage } from './edit-contact-number.page';

describe('EditContactNumberPage', () => {
  let component: EditContactNumberPage;
  let fixture: ComponentFixture<EditContactNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactNumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditContactNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
