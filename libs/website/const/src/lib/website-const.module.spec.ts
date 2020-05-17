import { async, TestBed } from '@angular/core/testing';
import { WebsiteConstModule } from './website-const.module';

describe('WebsiteConstModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteConstModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteConstModule).toBeDefined();
  });
});
