import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliverFinishPage } from './deliver-finish.page';

describe('DeliverFinishPage', () => {
  let component: DeliverFinishPage;
  let fixture: ComponentFixture<DeliverFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverFinishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliverFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
