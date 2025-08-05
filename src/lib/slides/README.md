# Slide Components

This folder contains reusable slide components for presentation layouts.

## BaseSlide

The foundational component that provides:
- Full screen height (100vh minimum)
- A4 landscape paper minimum height (800px)
- Snap scrolling behavior
- Responsive padding
- Print-friendly styles for A4 landscape

### Props
- `backgroundColor`: Background color (default: '#161617')
- `minHeight`: Minimum height (default: '800px')
- `className`: Additional CSS classes

### Usage
```svelte
<BaseSlide className="flex items-center justify-center">
  <div>Your slide content here</div>
</BaseSlide>
```

## Available Slides

### HeroSlide
Main landing slide with title, subtitle, and MacBook mockup.

**Props:**
- `galleryImages: string[]` - Array of image URLs

### FeaturesSlide
Interactive features overview with phone mockup.

**Props:**
- `featureItems: Array<{title, description, image, active}>` - Feature list
- `currentFeature: {title, description, image, active}` - Currently active feature
- `onFeatureHover: (index: number) => void` - Hover event handler

### GallerySlide
Layered image gallery showcase.

**Props:**
- `galleryImages: string[]` - Array of image URLs
- `centerIndex: number` - Index of centered image

### MultiDeviceSlide
Multi-device display (MacBook, iPad, iPhone).

**Props:**
- `assetLibraryImage: string` - MacBook image URL
- `feedbackImage: string` - iPad image URL
- `liveCanvasImage: string` - iPhone image URL

### FinalSlide
Call-to-action slide with no props required.

## Responsive Design

All slides are designed to:
- Fill the entire viewport (100vw × 100vh)
- Maintain minimum A4 landscape dimensions (800px height)
- Support responsive typography with clamp() functions
- Work with snap scrolling for smooth presentation navigation

## Print Support

The slides are optimized for printing in A4 landscape format:
- Each slide prints on a separate page
- Maintains proper dimensions (21cm × 29.7cm)
- Page breaks are handled automatically
