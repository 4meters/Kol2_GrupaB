import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRForumComponent } from './mr-forum.component';

describe('OrdersMRComponent', () => {
  let component: MRForumComponent;
  let fixture: ComponentFixture<MRForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
