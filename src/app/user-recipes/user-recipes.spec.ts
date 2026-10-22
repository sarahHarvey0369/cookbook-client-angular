import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipes } from './user-recipes';

describe('UserRecipes', () => {
  let component: UserRecipes;
  let fixture: ComponentFixture<UserRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRecipes],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRecipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
