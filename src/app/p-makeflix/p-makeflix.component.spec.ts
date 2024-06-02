import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMakeflixComponent } from './p-makeflix.component';

describe('PMakeflixComponent', () => {
  let component: PMakeflixComponent;
  let fixture: ComponentFixture<PMakeflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PMakeflixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PMakeflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
