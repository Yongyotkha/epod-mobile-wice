import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDropPage } from './add-drop.page';

describe('AddDropPage', () => {
  let component: AddDropPage;
  let fixture: ComponentFixture<AddDropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
