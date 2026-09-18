import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureModelPage } from './signature-model.page';

describe('SignatureModelPage', () => {
  let component: SignatureModelPage;
  let fixture: ComponentFixture<SignatureModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
