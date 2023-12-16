import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginscreemPage } from './loginscreem.page';

describe('LoginscreemPage', () => {
  let component: LoginscreemPage;
  let fixture: ComponentFixture<LoginscreemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginscreemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
