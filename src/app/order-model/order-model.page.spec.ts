import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderModelPage } from './order-model.page';

describe('OrderModelPage', () => {
  let component: OrderModelPage;
  let fixture: ComponentFixture<OrderModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
