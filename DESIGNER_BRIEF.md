# BlueCarbon Energy – Designer Brief
## Visual & Media Update Specifications

---

## **Project Overview**
Update the BlueCarbon Energy website to reflect authentic operational imagery, strengthen credibility, and align visual design with the clean, minimal environmental tech brand positioning.

---

## **Brand Identity**

### Design Principles
- **Clean & Minimal**: Avoid clutter; use whitespace effectively
- **Environmental Tech**: Modern, professional, trustworthy
- **Community-Focused**: Approachable, benefit-driven, human-centric
- **Credible**: Evidence-based, transparent, authentic

### Color Palette
- **Primary Blue**: `#0066CC` (trust, clean energy, ocean)
- **Neutral Backgrounds**:
  - `#FFFFFF` (white)
  - `#FAF8F5` (warm off-white)
  - `#F5F0E8` (light beige)
  - `#E5DFD3` (tan/beige borders)
- **Accent**: Blue accents for CTAs, headings, interactive elements
- **Text**: Dark foreground for readability on light backgrounds

### Typography
- **Headings**: Bold, clear, scannable
- **Body**: Clean sans-serif, comfortable reading size (16-18px base)
- **Hierarchy**: Clear distinction between H1, H2, H3, body text

---

## **Image Requirements**

### Priority 1: Process Section Images
**Location**: Homepage "How It Works" section (4 steps)

#### Step 1 - Harvest
- **Subject**: Shoreline/beach/marina sargassum collection
- **Show**: Workers or equipment collecting seaweed from coastal areas
- **Emphasize**: Clean, organized, sustainable operations
- **Current Image**: `/get_weed.png`

#### Step 2 - Convert
- **Subject**: Thermochemical conversion process
- **Show**: Processing equipment, conversion technology
- **Emphasize**: Professional equipment, organized workflow
- **Current Image**: `/process.png` (homepage), `/dry_da_weed.jpeg` (solution page)

#### Step 3 - Generate Power
- **Subject**: Energy generation facility
- **Show**: Industrial facility, power generation equipment
- **Emphasize**: Technology, clean energy infrastructure
- **Current Image**: `/factory.jpg`

#### Step 4 - Create Value
- **Subject**: Biochar and/or biostimulant products
- **Show**: Final products, agricultural applications (cucumber trials)
- **Emphasize**: Agricultural value, carbon-negative benefits
- **Current Image**: `/cucs.jpg` (homepage), `/refine.jpg` (solution page)

**Specifications**:
- Format: JPG or WebP (optimized for web)
- Dimensions: Minimum 800x600px (rectangular, horizontal orientation)
- Aspect Ratio: 4:3 or 16:9
- Quality: High resolution but optimized for fast load times (<200KB per image)

---

### Priority 2: Impact/Results Images
**Location**: New Impact page section or homepage expansion

#### Agricultural Trial Photos
- **Cucumbers**: Show growth results from biochar trials
  - **Current Image**: `/cucs.jpg` (used in homepage "Create Value" step)
- **Tomatoes**: Show growth results from biochar trials
- **Include**: Before/after comparisons, size comparisons, healthy plants
- **Purpose**: Build credibility, demonstrate agricultural benefits

**Specifications**:
- Format: JPG or WebP
- Dimensions: Minimum 1200x800px for feature images
- Include captions with trial details (location, yield improvement %, etc.)

---

### Priority 3: Hero Section
**Current**: `/hero.jpg` (coastal sargassum seaweed)
**Recommendation**:
- Keep current image OR
- Replace with wide-angle shot of beach cleanup operations OR
- Replace with dramatic sargassum bloom imagery emphasizing the scale of the problem

**Specifications**:
- Format: JPG or WebP
- Dimensions: Minimum 1920x1080px (full-width hero)
- Quality: High-resolution but optimized (<500KB)
- Text Overlay: Must have clear contrast areas for white text

---

### Priority 4: Team Photos (Future Phase)
**Location**: About page (when ready)
- Professional headshots on consistent background
- Casual, approachable tone
- High-resolution, well-lit

---

## **UX & Responsive Design**

### Layout Requirements
- **Mobile-First**: All designs must work flawlessly on mobile (320px+)
- **Tablet**: Optimized for iPad/tablet viewports (768px+)
- **Desktop**: Full experience on desktop (1024px+)
- **Max Width**: Content containers max-width 1280px (7xl)

### Performance Optimization
- **Image Lazy Loading**: Implement for all non-critical images
- **WebP Format**: Use modern formats with fallbacks
- **Compression**: Target <200KB per standard image, <500KB for hero images
- **CDN**: Consider using Next.js Image component optimization

### Accessibility
- **Alt Text**: All images must have descriptive alt text
- **Contrast**: Maintain WCAG AA standards (4.5:1 minimum)
- **Focus States**: Clear focus indicators on interactive elements

---

## **Interactive Elements**

### Buttons & CTAs
- **Primary CTA**: White background, blue text, blue border
  - Hover: Blue background, white text
  - Example: "See How It Works", "Start a Conversation"
- **Secondary CTA**: Blue background, white text, white border
  - Hover: White background, blue text
- **Border Radius**: 8px (rounded-lg)
- **Padding**: 32px horizontal, 16px vertical (px-8 py-4)
- **Font**: Semibold, 18px (text-lg)

### Hover States
- Smooth transitions (transition-all)
- Subtle shadows on cards (hover:shadow-lg)
- Border color changes on cards (hover:border-[#0066CC]/30)

---

## **Section-by-Section Visual Specs**

### Hero Section
- **Background**: Full-bleed image with subtle dark overlay (bg-black/20)
- **Text Color**: White
- **Layout**: Two-column grid (headline left, CTA right)
- **Tagline**: Bold blue text on white/95 opacity background, inline-block with padding and rounded corners

### Why It Matters
- **Background**: White with 4px blue bottom border
- **Icons**: Blue arrow symbols (→) or custom icons
- **Layout**: Three-column grid on desktop, stacked on mobile

### Sargassum Crisis
- **Background**: Warm off-white (#FAF8F5)
- **Layout**: Two-column (text + image)
- **Image**: Sargassum accumulation on beach (aerial view)
- **Image Treatment**: Rounded corners (rounded-2xl), object-cover

### How It Works
- **Background**: Light beige (#F5F0E8)
- **Cards**: White background, tan border, hover effects
- **Step Numbers**: Large, bold, blue (#0066CC)
- **Layout**: Four-column grid on desktop, stacked on mobile

### Solution Page - Technology & Safety Standards
- **Background**: White
- **Layout**: Centered text (no image) - max-width 3xl container
- **Text**: Centered alignment with checkmark bullet points
- **Note**: Image removed from this section; text-only centered layout

### Progress/Impact
- **Background**: White
- **Metrics**: Large blue numbers, smaller gray labels
- **Cards**: Off-white background (#FAF8F5), rounded corners, centered text
- **Note**: Include "(Target)" label on metrics to indicate projections

### CTA Section
- **Background**: Solid blue (#0066CC)
- **Text**: White and white/90
- **Buttons**: White primary, white-bordered secondary

---

## **Content Hierarchy**

### Scannable Elements
- Short paragraphs (2-3 sentences max)
- Bulleted lists with clear visual bullets
- Subheadings to break up content
- White space between sections

### Visual Flow
1. Hero (immediate impact)
2. Why It Matters (benefits, 3 bullets)
3. Sargassum Crisis (problem context)
4. How It Works (solution, 4 steps)
5. Progress (credibility)
6. CTA (conversion)

---

## **File Naming Conventions**

### Images
- `hero-[description].jpg` (e.g., `hero-sargassum-bloom.jpg`)
- `process-[step-name].jpg` (e.g., `process-harvest.jpg`, `process-reactor.jpg`)
- `impact-[subject].jpg` (e.g., `impact-cucumber-trial.jpg`)
- `team-[name].jpg` (e.g., `team-mark-mathis.jpg`)

### Location
- All images in `/public/` directory at root
- Organized in subdirectories if preferred: `/public/images/process/`, `/public/images/impact/`

---

## **Deliverables Checklist**

### Immediate Priority
- [x] 4 process images (harvest: `/get_weed.png`, convert: `/process.png`, reactor: `/factory.jpg`, value-creation: `/cucs.jpg`)
- [x] Reactor/processing images implemented
- [x] Hero image in place (`/hero.jpg`)

### Phase 2
- [x] Agricultural trial photos (cucumbers: `/cucs.jpg` - used in homepage)
- [ ] Additional trial photos (tomatoes)
- [ ] Before/after comparison images for trials
- [ ] Infographic or chart showing yield improvements

### Phase 3 (When Ready)
- [ ] Team headshots (professional, consistent style)
- [ ] Partner logos (if applicable)
- [ ] Additional impact photography

---

## **Success Metrics**

### Visual Design
- Clean, professional aesthetic aligned with environmental tech brand
- Fast load times (<3s on 4G)
- Fully responsive across all devices
- High contrast and accessibility compliance

### Content
- Clear, benefit-focused messaging
- Scannable sections with strong visual hierarchy
- Authentic imagery that builds trust and credibility

### User Experience
- Intuitive navigation
- Clear CTAs with high conversion potential
- Minimal friction from landing to contact

---

## **Notes for Designer/Photographer**

1. **Authenticity is key**: Use real equipment, real operations, real results
2. **Show, don't tell**: Images should convey the process and impact without heavy text
3. **Optimize for web**: All images must be compressed and optimized for performance
4. **Consistent style**: Maintain visual consistency across all imagery
5. **Energy efficiency**: Consider the environmental impact of large files—optimize aggressively

---

## **Questions or Clarifications?**

Contact the BCE team with any questions about:
- Access to facilities for photography
- Specific trial data for captions
- Brand guidelines or logo usage
- Technical specifications

---

**Document Version**: 1.1
**Last Updated**: 2025-12-04
**Prepared for**: BlueCarbon Energy Website Redesign
**Changes**: Updated to reflect current implementation - process images assigned, Technology & Safety Standards section layout updated (image removed, text centered)
