import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetjobPage } from './getjob.page';

describe('GetjobPage', () => {
  let component: GetjobPage;
  let fixture: ComponentFixture<GetjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
