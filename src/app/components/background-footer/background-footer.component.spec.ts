import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFooterComponent } from './background-footer.component';

describe('BackgroundFooterComponent', () => {
  let component: BackgroundFooterComponent;
  let fixture: ComponentFixture<BackgroundFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
