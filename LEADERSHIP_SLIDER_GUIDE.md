# Leadership Marquee Slider - How to Add More Figures

## Overview
The Leadership Marquee Slider is now active and displays prominent figures in an interactive, rotating carousel. You can easily add more prominent figures like governors, ministers, and other national leaders.

## How to Add More Leaders

### Step 1: Edit the leaders array in `components/faculty/leadership-marquee-slider.tsx`

Locate this section:
```typescript
const leaders = [
  {
    name: "Prof. Dr. Biswo Nath Poudel",
    title: "Governor of Nepal",
    role: "Professor, KU School of Management",
    image: "/nepali-professor-biswo-nath-poudel-leadership.jpg",
    quote: "...",
    credentials: [...],
    featured: true,
  },
  // Add more leaders here
]
```

### Step 2: Add a New Leader Object

Copy this template and fill in the details:

```typescript
{
  name: "Full Name",
  title: "Current Position/Title",
  role: "Role at KU SOM (e.g., Guest Lecturer, Advisor)",
  image: "/path-to-image.jpg",
  quote: "Inspirational quote about education, business, or Nepal's future",
  credentials: [
    "Credential 1 (e.g., PhD from University)",
    "Credential 2 (e.g., Former Position)",
    "Credential 3 (e.g., Achievement or Certification)",
  ],
  featured: false, // Set to true only for 1-2 most prominent figures
}
```

## Field Explanations

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Full name of the leader | "Prof. Dr. Biswo Nath Poudel" |
| `title` | Current prominent position | "Governor of Nepal" |
| `role` | Connection to KU SOM | "Professor, KU School of Management" |
| `image` | Path to image file in `/public` | "/nepali-professor-biswo-nath-poudel-leadership.jpg" |
| `quote` | Inspirational quote (2-3 sentences) | "Education is the cornerstone..." |
| `credentials` | Array of 3 key credentials/achievements | ["PhD UC Berkeley", "Former NPC Vice Chairman", "Policy Architect"] |
| `featured` | Boolean - Shows star badge if true | true (only 1-2 leaders) |

## Features of the Slider

✅ **Auto-rotating** - Changes slides every 6 seconds  
✅ **Manual navigation** - Previous/Next buttons to browse  
✅ **Dot indicators** - Click any dot to jump to that slide  
✅ **Pause on hover** - Auto-play pauses when hovering  
✅ **Responsive design** - Works on mobile, tablet, desktop  
✅ **Fade transitions** - Smooth image transitions  
✅ **Status indicator** - Shows auto-play status (green dot when active)  

## Image Guidelines

- **Location**: Place all images in `/public` folder
- **Naming**: Use descriptive names (e.g., `nepali-governor-name.jpg`)
- **Size**: Recommended 600x800px (3:4 ratio) for portrait orientation
- **Format**: JPG or PNG
- **Quality**: High-quality professional headshots

## Example: Adding a New Governor

```typescript
{
  name: "Dr. Yadav Silwal",
  title: "Minister of Finance",
  role: "Guest Lecturer, KU SOM",
  image: "/nepali-minister-finance-yadav-silwal.jpg",
  quote: "Technology and finance must work together to build Nepal's digital economy. That's what we teach at KU SOM.",
  credentials: [
    "PhD Economics",
    "Former NRB Governor",
    "Budget Architect for Nepal",
  ],
  featured: true,
}
```

## Styling Notes

- The first leader (index 0) is marked with `featured: true` by default
- Featured leaders get a ⭐ "Featured" badge on their image
- All leaders get equal presentation otherwise
- The slider maintains consistent spacing and layout

## Navigation Controls

- **Left/Right arrows**: Navigate between leaders
- **Dot indicators**: Jump directly to any leader
- **Auto-play**: Automatically cycles through all leaders (6-second interval)
- **Hover behavior**: Hovering on buttons pauses auto-play

## Tips for Engagement

1. **Add 4-6 prominent figures** for better rotation and interest
2. **Prioritize current positions** - Governor, Ministers, Vice-Chancellors
3. **Mix local and international recognition** - Creates aspirational appeal
4. **Quote quality matters** - Use quotes that resonate with students
5. **Update credentials** - Keep them current and impressive

## Future Enhancements

You can extend this slider to include:
- Swipe navigation on mobile
- Keyboard arrow key support
- More detailed modal pop-ups
- Video testimonials
- Social media integration

---

**Ready to add more leaders?** Simply edit the leaders array and add your new prominent figures!
