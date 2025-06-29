import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-course-card, [app-course-card]',
  imports: [NgClass],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() courseTitle!: string;

  courseDetails = input.required<{
    image: string;
    author: string;
    duration: number;
    complexity: 'Beginner' | 'Intermediate' | 'Advanced';
    courseDescription: string;
    rating: number;
  }>();

  isFeatured = input(false, {
    transform: (value: any) =>
      value === true || value === 'true' || value === '',
  });

  enrollmentStatus = signal<'Enrolled' | 'Not Enrolled'>('Not Enrolled');

  @Output() enrollRequest = new EventEmitter<string>();

  viewDetails = output<{
    image: string;
    author: string;
    duration: number;
    complexity: 'Beginner' | 'Intermediate' | 'Advanced';
    courseDescription: string;
    rating: number;
  }>();

  onEnroll(event: Event) {
    event.stopPropagation();
    this.enrollmentStatus.set('Enrolled');
    this.enrollRequest.emit(this.courseTitle);
  }

  onCardClick(event: Event) {
    if ((event.target as HTMLElement).tagName.toLowerCase() !== 'button') {
      this.viewDetails.emit(this.courseDetails());
    }
  }
}
