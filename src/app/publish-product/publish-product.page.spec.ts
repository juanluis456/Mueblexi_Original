import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublishProductPage } from './publish-product.page';

describe('PublishProductPage', () => {
  let component: PublishProductPage;
  let fixture: ComponentFixture<PublishProductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
