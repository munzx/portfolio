# AboutMeSlide Component

A professional "About Me" slide component designed to showcase personal information, skills, and contact details. This component follows the same design patterns as other slides in the presentation system.

## Features

- **Professional Layout**: Clean, modern design with a two-column layout
- **Device Mockup**: Integrated MacBook Pro mockup to showcase portfolio work
- **Skills Display**: Flexible skills section with styled skill tags
- **Contact Links**: Social media and contact information with custom icons
- **Statistics**: Display experience, projects completed, and other metrics
- **Customizable**: All content, colors, and styling can be customized via props
- **Responsive**: Fully responsive design that works on all device sizes
- **Accessibility**: Proper ARIA labels, focus states, and semantic HTML

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `'Munzir Suliman'` | Your full name |
| `title` | `string` | `'Software Engineer & Creative Developer'` | Your professional title |
| `description` | `string` | `'Passionate about creating...'` | Brief description about yourself |
| `portfolioImage` | `string` | `'/img/test.png'` | Image URL for the portfolio showcase |
| `skills` | `string[]` | `[]` | Array of skills to display |
| `contactEmail` | `string` | `''` | Email address (shows email link if provided) |
| `contactLinkedIn` | `string` | `''` | LinkedIn profile URL |
| `contactGitHub` | `string` | `''` | GitHub profile URL |
| `contactWebsite` | `string` | `''` | Personal website URL |
| `experience` | `string` | `'5+ years'` | Years of experience |
| `projectsCompleted` | `number` | `50` | Number of projects completed |
| `accentColor` | `string` | `'#0071e3'` | Primary accent color for UI elements |

## Usage Example

```svelte
<script>
  import { AboutMeSlide } from '$lib/slides';
</script>

<AboutMeSlide
  name="Your Name"
  title="Your Professional Title"
  description="A brief description about your background, expertise, and what drives you in your professional journey."
  portfolioImage="/path/to/your/portfolio-screenshot.png"
  skills={[
    'JavaScript',
    'TypeScript',
    'Svelte',
    'React',
    'Node.js',
    'UI/UX Design',
    'Product Strategy'
  ]}
  contactEmail="your.email@example.com"
  contactLinkedIn="https://linkedin.com/in/yourprofile"
  contactGitHub="https://github.com/yourusername"
  experience="3+ years"
  projectsCompleted={25}
  accentColor="#6366f1"
/>
```

## Design Philosophy

The AboutMeSlide follows the same design principles as the rest of the presentation system:

- **Consistent Typography**: Uses the same clamp-based responsive typography
- **Apple-inspired Design**: Clean, minimal aesthetic with subtle animations
- **Professional Color Palette**: Dark background with light text and customizable accents
- **Smooth Transitions**: Hover effects and animations that feel natural
- **Content-First**: Design supports the content rather than overwhelming it

## Customization Tips

1. **Personal Branding**: Use your brand colors by setting the `accentColor` prop
2. **Portfolio Image**: Use a high-quality screenshot of your best work or a professional photo
3. **Skills Selection**: Choose 6-8 key skills to avoid overcrowding
4. **Contact Strategy**: Only include the contact methods you actively want to use
5. **Statistics**: Keep numbers realistic and impressive but honest

## Accessibility Features

- All interactive elements have proper focus states
- Color contrast meets WCAG guidelines
- Semantic HTML structure with proper headings
- Screen reader friendly with descriptive alt text
- Keyboard navigation support for all interactive elements

## Integration

This slide integrates seamlessly with the existing slide system:
- Extends `BaseSlide` for consistent behavior
- Supports snap scrolling
- Print-friendly for A4 landscape
- Responsive across all device sizes
- Follows the established animation patterns
