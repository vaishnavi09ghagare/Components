import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionhomeComponent } from './collectionhome.component';

describe('CollectionhomeComponent', () => {
  let component: CollectionhomeComponent;
  let fixture: ComponentFixture<CollectionhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionhomeComponent]
    });
    fixture = TestBed.createComponent(CollectionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
