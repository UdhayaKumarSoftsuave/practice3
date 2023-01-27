import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameContorlComponent } from './game-contorl.component';

describe('GameContorlComponent', () => {
  let component: GameContorlComponent;
  let fixture: ComponentFixture<GameContorlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameContorlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameContorlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
