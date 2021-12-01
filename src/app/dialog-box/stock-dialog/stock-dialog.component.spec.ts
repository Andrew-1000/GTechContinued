import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDialogComponent } from './stock-dialog.component';

describe('StockDialogComponent', () => {
  let component: StockDialogComponent;
  let fixture: ComponentFixture<StockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
