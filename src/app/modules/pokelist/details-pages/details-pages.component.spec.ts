import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPagesComponent } from './details-pages.component';

describe('DetailsPagesComponent', () => {
  let component: DetailsPagesComponent;
  let fixture: ComponentFixture<DetailsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
