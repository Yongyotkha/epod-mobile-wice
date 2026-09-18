import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemarkModalPage } from './remark-modal.page';

describe('RemarkModalPage', () => {
  let component: RemarkModalPage;
  let fixture: ComponentFixture<RemarkModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarkModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemarkModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
