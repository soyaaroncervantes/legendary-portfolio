import { async, TestBed } from '@angular/core/testing';
import { WebsiteRoutesModule } from './website-routes.module';

describe('WebsiteRoutesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteRoutesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteRoutesModule).toBeDefined();
  });
});
