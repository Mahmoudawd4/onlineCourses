import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesmainComponentComponent } from './categoriesmain-component.component';

describe('CategoriesmainComponentComponent', () => {
  let component: CategoriesmainComponentComponent;
  let fixture: ComponentFixture<CategoriesmainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesmainComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesmainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
