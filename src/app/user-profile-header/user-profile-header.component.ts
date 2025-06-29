import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  model,
  signal,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-user-profile-header',
  imports: [CommonModule],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom, // Shadow DOM for style isolation
  templateUrl: './user-profile-header.component.html',
  styleUrl: './user-profile-header.component.css',
})
export class UserProfileHeaderComponent implements OnInit {
  // Signal-based input for avatar URL with default
  avatarUrl = input('https://placehold.co/64x64?text=Avatar');

  // Two-way binding for userName using model()
  userName = model<string>('');

  // Internal editing state
  isEditing = signal(false);

  ngOnInit() {
    // Lifecycle logging
    console.log(`User Profile for '${this.userName()}' has been initialized.`);
  }

  startEdit() {
    this.isEditing.set(true);
  }

  saveEdit() {
    // Optionally trim/validate
    this.userName.set(this.userName().trim());
    this.isEditing.set(false);
  }
}
