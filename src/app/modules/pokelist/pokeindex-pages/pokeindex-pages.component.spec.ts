import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeindexPagesComponent } from './pokeindex-pages.component';

describe('PokeindexPagesComponent', () => {
  let component: PokeindexPagesComponent;
  let fixture: ComponentFixture<PokeindexPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeindexPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeindexPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
