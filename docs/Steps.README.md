# Steps Component

A reusable Svelte component for displaying step-by-step processes with a clean, modern design inspired by the ProductDevelopmentSlide. Built on top of BaseSlide for consistent presentation layout.

## Features

- **Flexible Step Count**: Supports 2-5 steps with automatic layout adjustment
- **Custom Icons**: Built-in icon library with support for custom SVG paths
- **Responsive Design**: Adapts to mobile and desktop layouts with proper connectors
- **Optional Feedback Loop**: Visual feedback arrow for iterative processes
- **TypeScript Support**: Fully typed with clear interfaces
- **BaseSlide Integration**: Uses BaseSlide for consistent slide presentation
- **Clean & Simple**: Easy to read, understand, and maintain code

## Usage

```typescript
import Steps from '$lib/components/Steps.svelte';
import type { StepItem } from '$lib/types/steps';

const mySteps: StepItem[] = [
  {
    title: 'Planning',
    subtitle: 'Define Goals',
    description: 'Understand requirements and set objectives',
    icon: 'idea'
  },
  {
    title: 'Development',
    description: [
      'Code implementation',
      'Testing & QA',
      'Performance optimization'
    ],
    icon: 'build'
  },
  {
    title: 'Launch',
    description: 'Deploy and monitor the solution',
    icon: 'check'
  }
];
```

```svelte
<Steps 
  steps={mySteps}
  title="Our Process"
  subtitle="How we deliver results"
  showFeedbackLoop={true}
  className="my-custom-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepItem[]` | `[]` | Array of step objects (2-5 items) |
| `title` | `string` | `''` | Optional main title |
| `subtitle` | `string` | `''` | Optional subtitle |
| `showFeedbackLoop` | `boolean` | `false` | Show curved feedback arrow |
| `feedbackText` | `string` | `'Feedback & Data'` | Text for feedback loop |
| `className` | `string` | `''` | Additional CSS classes for main container |
| `stepBackgroundClass` | `string` | `''` | Background CSS classes for individual step cards |

## StepItem Interface

```typescript
type StepItem = {
  title: string;              // Step title (required)
  subtitle?: string;          // Optional subtitle
  description: string | string[]; // Single line or array of lines
  icon?: string;              // Optional icon key or custom SVG path
};
```

## Icon Behavior

- **With Icon**: If you provide an `icon` value, it will be displayed above the step title
- **Without Icon**: If no `icon` is provided, no icon will be shown (clean text-only layout)
- **Invalid Icon**: If an invalid icon key is provided, no icon will be displayed

## Built-in Icons

The component includes these pre-defined icons:

- `idea` - Lightbulb icon for ideation/planning
- `users` - People icon for customer/user focus
- `build` - Tool icon for development/building
- `iterate` - Refresh icon for iteration/improvement
- `check` - Checkmark icon for completion/validation

## Custom Icons

You can provide custom SVG paths:

```typescript
{
  title: 'Custom Step',
  description: 'With custom icon',
  icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
}
```

## Examples

### With Icons
```svelte
<Steps 
  steps={[
    { title: 'Planning', description: 'Define goals', icon: 'idea' },
    { title: 'Development', description: 'Build solution', icon: 'build' },
    { title: 'Launch', description: 'Deploy & monitor', icon: 'check' }
  ]}
  title="Development Process"
  subtitle="From idea to launch"
/>
```

### Without Icons (Clean Text Layout)
```svelte
<Steps 
  steps={[
    { title: 'Planning', description: 'Define project scope and requirements' },
    { title: 'Development', description: 'Build and test the solution' },
    { title: 'Launch', description: 'Deploy and provide support' }
  ]}
  title="Simple Process"
  subtitle="Clean and minimal approach"
/>
```

### Mixed (Some With, Some Without Icons)
```svelte
<Steps 
  steps={[
    { title: 'Research', description: 'Market analysis', icon: 'idea' },
    { title: 'Planning', description: 'Create roadmap' }, // No icon
    { title: 'Execution', description: 'Build the product', icon: 'build' }
  ]}
/>
```

### 5-Step Process with Feedback Loop
```svelte
<Steps 
  steps={comprehensiveSteps}
  title="Complete Journey"
  subtitle="End-to-end solution delivery"
  showFeedbackLoop={true}
  feedbackText="Continuous Improvement"
/>
```

### As a Full Slide (uses BaseSlide internally)
```svelte
<Steps 
  steps={mySteps}
  title="Our Methodology"
  className="bg-gradient-to-br from-blue-900 via-black to-purple-900"
/>
```

### With Custom Background Colors
```svelte
<Steps 
  steps={mySteps}
  title="Colorful Process"
  stepBackgroundClass="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm"
  className="bg-black"
/>

<!-- Or solid background -->
<Steps 
  steps={mySteps}
  stepBackgroundClass="bg-gray-800/50"
  className="bg-gradient-to-r from-gray-900 to-gray-800"
/>
```

## Responsive Behavior

- **Desktop**: Horizontal layout with arrow connectors
- **Mobile**: Vertical layout with rotated arrow connectors
- **Feedback Loop**: Curved arrow on desktop, vertical on mobile

## Validation

The component automatically validates step count and logs a warning if outside the 2-5 range:

```typescript
$: if (steps.length < 2 || steps.length > 5) {
  console.warn('Steps component supports 2-5 steps only');
}
```

## Styling

The component uses Tailwind CSS classes and can be customized with the `className` prop. All text is styled for dark backgrounds with white/gray color scheme.

## Best Practices

1. **Keep descriptions concise**: Use short, clear phrases
2. **Choose appropriate icons**: Match icons to step content
3. **Use feedback loops sparingly**: Only for iterative processes
4. **Consistent step types**: Keep similar level of detail across steps
5. **Test responsiveness**: Verify layout on mobile devices
