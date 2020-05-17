import { async, TestBed } from '@angular/core/testing';
import { WebsiteServiceModule } from './website-service.module';

describe('WebsiteServiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteServiceModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteServiceModule).toBeDefined();
  });
});
