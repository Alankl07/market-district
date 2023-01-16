import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMarketComponent } from './products-market.component';

describe('ProductsMarketComponent', () => {
  let component: ProductsMarketComponent;
  let fixture: ComponentFixture<ProductsMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
