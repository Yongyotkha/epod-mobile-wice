import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetjobQrscannerComponent } from './getjob-qrscanner.component';

describe('GetjobQrscannerComponent', () => {
  let component: GetjobQrscannerComponent;
  let fixture: ComponentFixture<GetjobQrscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetjobQrscannerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetjobQrscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
