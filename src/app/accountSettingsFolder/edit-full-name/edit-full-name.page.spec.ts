import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFullNamePage } from './edit-full-name.page';

describe('EditFullNamePage', () => {
  let component: EditFullNamePage;
  let fixture: ComponentFixture<EditFullNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFullNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFullNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
