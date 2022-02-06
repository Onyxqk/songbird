import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackLengthPipe } from '../track-length.pipe';
import { SafeUrlPipe } from '../safe-url.pipe';

import { ResultsComponent } from './results.component';
import { MOCK_DATA_RESPONSE } from '../mockDataResponse.json'

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent, TrackLengthPipe, SafeUrlPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    component.results = MOCK_DATA_RESPONSE
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
