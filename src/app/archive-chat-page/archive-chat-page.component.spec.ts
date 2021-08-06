import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveChatPageComponent } from './archive-chat-page.component';

describe('ArchiveChatPageComponent', () => {
  let component: ArchiveChatPageComponent;
  let fixture: ComponentFixture<ArchiveChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveChatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
