# CompanySlide Component

A professional company showcase slide designed to highlight company information, achievements, and brand identity. Perfect for portfolio presentations, company introductions, or showcasing organizations you've worked with.

## Features

- **Company Branding**: Large logo display with elegant framing and glow effects
- **Complete Company Profile**: Name, tagline, description, and key details
- **Company Details Grid**: Founded date, location, industry, and team size
- **Statistics Display**: Flexible stats section for key metrics
- **Values Showcase**: Company values displayed as styled tags
- **Achievement Highlights**: Key accomplishments and milestones
- **Website Integration**: Direct link to company website with call-to-action
- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: Proper ARIA labels, focus states, and semantic HTML

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'About Our Company'` | Main slide heading |
| `subtitle` | `string` | `'Innovation. Excellence. Impact.'` | Subtitle text |
| `company` | `CompanyInfo` | Default company object | Company information object |
| `accentColor` | `string` | `'#0071e3'` | Primary accent color for styling |
| `stats` | `Array<{label: string; value: string}>` | `[]` | Optional statistics to display |

## CompanyInfo Interface

```typescript
interface CompanyInfo {
  name: string;           // Required: Company name
  tagline: string;        // Required: Company tagline/motto
  description: string;    // Required: Company description
  logo: string;          // Required: Company logo URL
  founded?: string;       // Optional: Founding year
  location?: string;      // Optional: Company location
  website?: string;       // Optional: Company website URL
  industry?: string;      // Optional: Industry sector
  size?: string;         // Optional: Company size (e.g., "50+ employees")
  achievements?: string[]; // Optional: Key achievements
  values?: string[];      // Optional: Company values
}
```

## Usage Examples

### Basic Usage
```svelte
<script>
  import { CompanySlide } from '$lib/slides';
  
  const company = {
    name: 'TechFlow Solutions',
    tagline: 'Innovating tomorrow, today',
    description: 'We build cutting-edge software solutions that transform businesses.',
    logo: '/images/company-logo.svg'
  };
</script>

<CompanySlide {company} />
```

### Full-Featured Example
```svelte
<script>
  import { CompanySlide } from '$lib/slides';
  
  const company = {
    name: 'TechFlow Solutions',
    tagline: 'Innovating tomorrow, today',
    description: 'We are a forward-thinking technology company dedicated to creating innovative software solutions that transform businesses and enhance user experiences.',
    logo: '/images/company-logo.svg',
    founded: '2018',
    location: 'San Francisco, CA',
    industry: 'Technology',
    size: '50+ employees',
    website: 'https://techflow.com',
    values: ['Innovation', 'Quality', 'Collaboration', 'Impact'],
    achievements: [
      'Featured in TechCrunch 2023',
      '1M+ users worldwide',
      'ISO 27001 certified',
      'Top 10 Startup Award'
    ]
  };
  
  const stats = [
    { label: 'Projects Delivered', value: '200+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Team Members', value: '50+' }
  ];
</script>

<CompanySlide 
  title="Our Company"
  subtitle="Building the future through innovation"
  {company}
  {stats}
  accentColor="#8b5cf6"
/>
```

### Minimal Company Profile
```svelte
<script>
  import { CompanySlide } from '$lib/slides';
  
  const company = {
    name: 'Freelance Studio',
    tagline: 'Crafting digital experiences',
    description: 'Independent design and development studio focused on creating beautiful, functional digital products.',
    logo: '/images/studio-logo.svg',
    website: 'https://mystudio.com',
    values: ['Quality', 'Creativity', 'Client Success']
  };
</script>

<CompanySlide 
  title="About the Studio"
  {company}
  accentColor="#f59e0b"
/>
```

## Layout Structure

The CompanySlide uses a two-column layout:

### Left Column - Company Information
- Title and subtitle
- Company name and tagline
- Detailed description
- Company details grid (founded, location, industry, size)
- Statistics (if provided)
- Company values tags
- Website call-to-action button

### Right Column - Visual Elements
- Company logo with elegant frame and glow effects
- Key achievements list
- Floating star badge for visual appeal

## Design Philosophy

The CompanySlide follows the same design principles as other components:

- **Professional Branding**: Emphasizes company identity and professionalism
- **Clean Layout**: Organized information hierarchy for easy scanning
- **Visual Impact**: Large logo display with subtle animations
- **Consistent Styling**: Matches the overall presentation design system
- **Content Focus**: Design supports company story and achievements

## Customization Tips

1. **Logo Quality**: Use high-resolution SVG or PNG logos (minimum 400x400px)
2. **Color Consistency**: Use company brand colors for the accent color
3. **Content Balance**: Keep descriptions concise but informative
4. **Achievement Selection**: Choose 3-5 most impactful achievements
5. **Values Alignment**: Select core values that define company culture
6. **Statistics Relevance**: Use metrics that best represent company success

## Accessibility Features

- Proper alt text for company logo
- ARIA labels for interactive elements
- Keyboard navigation support with focus indicators
- Semantic HTML structure for screen readers
- High contrast ratios for text readability
- Scalable design that works with browser zoom

## Integration

Add the CompanySlide to your presentation:

```svelte
<!-- In your main presentation file -->
<script>
  import { CompanySlide } from '$lib/slides';
  // ... company data setup
</script>

<!-- Your presentation flow -->
<AboutMeSlide {personalData} />
<TeamSlide {teamMembers} />

<!-- Company slide -->
<CompanySlide {company} {stats} />

<!-- Continue with other slides -->
<FinalSlide />
```

## Use Cases

- **Portfolio Presentations**: Showcase companies you've worked with
- **Agency Profiles**: Present your agency's capabilities and achievements  
- **Startup Pitches**: Introduce your startup to investors or clients
- **Corporate Presentations**: Company overview for stakeholders
- **Client Proposals**: Establish credibility and expertise
