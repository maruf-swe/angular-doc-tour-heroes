import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailssComponent } from './hero-detailss.component';

describe('HeroDetailssComponent', () => {
  let component: HeroDetailssComponent;
  let fixture: ComponentFixture<HeroDetailssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroDetailssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
