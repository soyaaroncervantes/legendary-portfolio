import { async, TestBed } from '@angular/core/testing';
import { WebsiteComponentsModule } from './website-components.module';

describe('WebsiteComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteComponentsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteComponentsModule).toBeDefined();
  });
});
