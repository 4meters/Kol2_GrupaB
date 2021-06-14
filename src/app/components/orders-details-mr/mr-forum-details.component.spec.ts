import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRForumDetails } from './mr-forum-details.component';

describe('OrdersDetailsMrComponent', () => {
  let component: MRForumDetails;
  let fixture: ComponentFixture<MRForumDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRForumDetails ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRForumDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
