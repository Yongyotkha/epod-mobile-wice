import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessModelPage } from './success-model.page';

describe('SuccessModelPage', () => {
  let component: SuccessModelPage;
  let fixture: ComponentFixture<SuccessModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
