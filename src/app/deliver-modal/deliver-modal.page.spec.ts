import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverModalPage } from './deliver-modal.page';

describe('DeliverModalPage', () => {
  let component: DeliverModalPage;
  let fixture: ComponentFixture<DeliverModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
