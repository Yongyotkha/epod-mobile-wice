import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletejobQrscannerComponent } from './completejob-qrscanner.component';

describe('CompletejobQrscannerComponent', () => {
  let component: CompletejobQrscannerComponent;
  let fixture: ComponentFixture<CompletejobQrscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletejobQrscannerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletejobQrscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
