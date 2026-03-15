import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPurchasesPage } from './client-purchases.page';

describe('ClientPurchasesPage', () => {
  let component: ClientPurchasesPage;
  let fixture: ComponentFixture<ClientPurchasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPurchasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
