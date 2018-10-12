import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
// import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      imports: [ReactiveFormsModule],
      providers: [SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a div component with class tab`, async(() => {
    const fixture = TestBed.createComponent(SearchBoxComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.tab')).toBeTruthy();
  }));
  it(`should have a div component with id refine`, async(() => {
    const fixture = TestBed.createComponent(SearchBoxComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#refine')).toBeTruthy();
  }));
  it(`should have a form component`, async(() => {
    const fixture = TestBed.createComponent(SearchBoxComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  }));

});