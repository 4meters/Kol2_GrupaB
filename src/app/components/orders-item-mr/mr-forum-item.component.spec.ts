import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRForumItemComponent } from './mr-forum-item.component';

describe('OrdersItemMRComponent', () => {
  let component: MRForumItemComponent;
  let fixture: ComponentFixture<MRForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
