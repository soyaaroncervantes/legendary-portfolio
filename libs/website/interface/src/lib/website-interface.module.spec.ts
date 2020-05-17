import { async, TestBed } from '@angular/core/testing';
import { WebsiteInterfaceModule } from './website-interface.module';

describe('WebsiteInterfaceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteInterfaceModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteInterfaceModule).toBeDefined();
  });
});
