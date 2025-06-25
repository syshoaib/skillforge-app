# Skill Forge App

Skill Forge App is an Angular application demonstrating modern component design, state management, and parent-child communication using both decorator-based and signal-based Angular patterns.

## Key Features

### 1. CourseCardComponent

- Reusable, interactive course card for browsing courses.
- Supports both @Input()/@Output() decorators and signal-based input()/output() for parent-child communication.
- Manages internal state with signals (e.g., enrollment status).
- Emits actions/events to parent using both decorator and signal-based approaches.
- Flexible selector: usable as element or attribute.
- View encapsulation: Emulated.

### 2. UserProfileHeaderComponent

- Personalized user header with profile picture and in-place editable display name.
- Accepts initial user data as signals.
- Two-way binding with parent using model() signal.
- Internal state management for edit/display mode using signals.
- Style isolation via Shadow DOM encapsulation.
- Lifecycle logging for observability and debugging.

## Angular Concepts Demonstrated

- Component creation and code scaffolding
- Decorator-based and signal-based inputs/outputs
- Signal-based two-way data binding
- Internal state management with signals
- View encapsulation (Emulated and Shadow DOM)
- Template event listeners and conditional rendering
- Parent-child communication
- Lifecycle hooks and logging

## Usage

- Browse and enroll in courses using the CourseCardComponent.
- Edit and synchronize user display name with the UserProfileHeaderComponent.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
