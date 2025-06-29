import { Component, signal } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { RouterOutlet } from '@angular/router';
import { UserProfileHeaderComponent } from './user-profile-header/user-profile-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent, RouterOutlet, UserProfileHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  course1 = {
    image: 'https://placehold.co/350x160?text=Angular+Basics',
    author: 'Jane Doe',
    duration: 5,
    complexity: 'Beginner' as const,
    courseDescription: 'Learn the basics of Angular framework.',
    rating: 4.5,
  };

  course2 = {
    image: 'https://placehold.co/350x160?text=Advanced+Angular',
    author: 'John Smith',
    duration: 8,
    complexity: 'Advanced' as const,
    courseDescription: 'Deep dive into advanced Angular topics.',
    rating: 4.8,
  };

  onEnrollRequest(title: string) {
    console.log('Enroll requested for:', title);
  }

  onViewDetails(details: any) {
    console.log('View details:', details);
  }

  currentUser = signal('Alice');
}
