import { async, TestBed } from '@angular/core/testing';
import { WebsiteModelModule } from './website-model.module';

describe('WebsiteModelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteModelModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteModelModule).toBeDefined();
  });
});
