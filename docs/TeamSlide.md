# TeamSlide Component

A professional team showcase slide designed to highlight team members, collaborators, or key people in your projects. Perfect for portfolio presentations, team introductions, or showcasing project contributors.

## Features

- **Flexible Grid Layout**: Automatically adapts to different numbers of team members (1-4+ members)
- **Professional Photo Frames**: Circular photos with gradient borders and hover effects
- **Rich Member Profiles**: Name, title, bio, skills, and social links
- **Social Integration**: LinkedIn, GitHub, and website links with proper icons
- **Status Indicators**: Online/available status indicators for each member
- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: Proper ARIA labels, focus states, and semantic HTML
- **Empty State**: Graceful handling when no team members are provided

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Meet the Team'` | Main slide heading |
| `subtitle` | `string` | `'The creative minds behind the magic'` | Subtitle/description text |
| `teamMembers` | `TeamMember[]` | `[]` | Array of team member objects |
| `accentColor` | `string` | `'#0071e3'` | Primary accent color for styling |
| `layout` | `'grid' \| 'carousel'` | `'grid'` | Layout type (carousel planned for future) |

## TeamMember Interface

```typescript
interface TeamMember {
  name: string;           // Required: Full name
  title: string;          // Required: Job title or role
  image: string;          // Required: Photo URL
  bio?: string;           // Optional: Short biography
  skills?: string[];      // Optional: Array of skills (shows first 3)
  linkedIn?: string;      // Optional: LinkedIn profile URL
  github?: string;        // Optional: GitHub profile URL
  website?: string;       // Optional: Personal website URL
}
```

## Usage Examples

### Basic Usage
```svelte
<script>
  import { TeamSlide } from '$lib/slides';
  
  const teamMembers = [
    {
      name: 'Sarah Chen',
      title: 'Lead Designer',
      image: '/images/sarah.jpg'
    },
    {
      name: 'Alex Rodriguez',
      title: 'Full Stack Developer',
      image: '/images/alex.jpg'
    }
  ];
</script>

<TeamSlide {teamMembers} />
```

### Full-Featured Example
```svelte
<script>
  import { TeamSlide } from '$lib/slides';
  
  const teamMembers = [
    {
      name: 'Sarah Chen',
      title: 'Lead UX Designer',
      image: '/images/sarah.jpg',
      bio: 'Passionate about creating intuitive user experiences that delight and engage.',
      skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      linkedIn: 'https://linkedin.com/in/sarahchen',
      website: 'https://sarahchen.design'
    },
    {
      name: 'Alex Rodriguez',
      title: 'Full Stack Developer',
      image: '/images/alex.jpg',
      bio: 'Building scalable web applications with modern technologies.',
      skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com/alexrodriguez',
      linkedIn: 'https://linkedin.com/in/alexrodriguez'
    }
  ];
</script>

<TeamSlide 
  title="Our Amazing Team"
  subtitle="Meet the talented individuals who bring ideas to life"
  {teamMembers}
  accentColor="#6366f1"
/>
```

### Single Team Member (Hero Profile)
```svelte
<script>
  import { TeamSlide } from '$lib/slides';
  
  const teamMembers = [
    {
      name: 'Jordan Kim',
      title: 'Project Lead & Senior Engineer',
      image: '/images/jordan.jpg',
      bio: 'Leading innovative projects with 8+ years of experience in web development and team management.',
      skills: ['Leadership', 'React', 'System Architecture', 'Mentoring'],
      linkedIn: 'https://linkedin.com/in/jordankim',
      github: 'https://github.com/jordankim',
      website: 'https://jordankim.dev'
    }
  ];
</script>

<TeamSlide 
  title="Project Leadership"
  {teamMembers}
/>
```

## Layout Behavior

- **1 Member**: Centered single profile (hero style)
- **2 Members**: Two-column layout on desktop, single column on mobile
- **3-4 Members**: Three-column grid on large screens, responsive breakdown
- **5+ Members**: Four-column grid on large screens, adapts responsively

## Design Philosophy

The TeamSlide follows the same design principles as other components in the system:

- **Apple-Inspired Aesthetics**: Clean, minimal design with subtle animations
- **Professional Focus**: Emphasizes professionalism while remaining approachable
- **Consistent Branding**: Uses the same color system and typography
- **Smooth Interactions**: Hover effects and transitions that feel natural
- **Content-First**: Design supports the content rather than overwhelming it

## Customization Tips

1. **Photo Guidelines**: Use high-quality, professional photos (minimum 400x400px)
2. **Bio Length**: Keep bios concise (1-2 sentences work best)
3. **Skills**: Limit to 3-5 most relevant skills per person
4. **Color Harmony**: Use accent colors that complement your overall brand
5. **Consistency**: Maintain consistent photo styling and quality across team members

## Accessibility Features

- Proper alt text for all images including member names
- ARIA labels for social media links
- Keyboard navigation support with focus indicators
- Semantic HTML structure for screen readers
- High contrast ratios for text readability
- Scalable design that works with browser zoom

## Integration

Add the TeamSlide to your presentation flow:

```svelte
<!-- In your main presentation file -->
<script>
  import { TeamSlide } from '$lib/slides';
  // ... other imports and data
</script>

<!-- Your other slides -->
<AboutMeSlide {personalData} />

<!-- Team slide -->
<TeamSlide {teamMembers} />

<!-- Continue with other slides -->
<FinalSlide />
```

## Future Enhancements

- **Carousel Layout**: Horizontal scrolling for large teams
- **Animated Introductions**: Staggered entrance animations
- **Team Stats**: Collective experience, projects, etc.
- **Interactive Filtering**: Filter by role, skills, or location
- **Team Timeline**: Show collaboration history or project involvement
