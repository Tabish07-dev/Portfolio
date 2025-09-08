# Profile Images

## How to Add Your Profile Picture

1. **Add your profile photo** to this folder (`public/images/`)
2. **Recommended filename**: `tabish-ali-profile.jpg` or `tabish-ali-profile.png`
3. **Recommended size**: 400x400 pixels (square format works best)
4. **File format**: JPG or PNG

## Update the Image Path

After adding your photo, update the image source in the About component:

**File**: `src/components/About.tsx`
**Line**: Around line 90

**Change this:**
```jsx
<img
  src="/images/tabish-ali-profile.jpg"
  alt="Tabish Ali - Frontend Developer"
  className="w-full h-full object-cover"
/>

## Image Guidelines

- **Professional appearance**: Business casual or professional attire
- **Good lighting**: Well-lit, clear photo
- **Background**: Clean, simple background (solid color or blurred)
- **Expression**: Friendly, professional smile
- **Quality**: High resolution, sharp focus
- **Crop**: Head and shoulders, centered in frame

## Optional: Add More Images

You can also add:
- `hero-background.jpg` - Custom hero section background
- `about-background.jpg` - Custom about section background
- Project screenshots for the portfolio section

## Current Placeholder

The current placeholder image is a professional stock photo. Replace it with your actual photo to personalize your portfolio.
