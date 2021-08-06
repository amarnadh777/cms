import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveChatPageComponent } from './active-chat-page.component';

describe('ActiveChatPageComponent', () => {
  let component: ActiveChatPageComponent;
  let fixture: ComponentFixture<ActiveChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveChatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
