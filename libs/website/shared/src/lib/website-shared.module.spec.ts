import { async, TestBed } from '@angular/core/testing';
import { WebsiteSharedModule } from './website-shared.module';

describe('WebsiteSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteSharedModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteSharedModule).toBeDefined();
  });
});
