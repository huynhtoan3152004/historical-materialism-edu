# Chủ nghĩa duy vật lịch sử – Educational Website

Modern, interactive educational website about Historical Materialism (Chapter 3), connecting Vietnamese history with contemporary youth perspectives.

## Features

- 🎨 Modern, sophisticated design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- 🌐 Bilingual support (Vietnamese/English)
- ♿ Accessibility-focused (WCAG AA compliant)
- 🎯 Interactive matrix connecting theory, history, and youth perspectives
- 📊 Historical timeline with reveal animations
- ✅ Action checklist with localStorage persistence
- 🎓 Self-assessment quiz with instant feedback
- 🎭 Smooth scroll and parallax effects

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open browser**: Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles & theme
├── components/
│   ├── header.tsx          # Sticky navigation
│   ├── hero.tsx            # Hero section with CTA
│   ├── theory-section.tsx  # 5 core categories
│   ├── timeline.tsx        # Historical timeline
│   ├── matrix-section.tsx  # Interactive matrix
│   ├── youth-section.tsx   # Youth perspectives & checklist
│   ├── faq-section.tsx     # FAQ accordion
│   ├── resources-section.tsx # Resources & downloads
│   ├── quiz-dialog.tsx     # Self-assessment quiz
│   └── footer.tsx          # Footer with links
├── hooks/
│   └── use-language.tsx    # Language toggle hook
└── lib/
    └── data.ts             # All content data (bilingual)
\`\`\`

## Customization

### Colors

Edit `app/globals.css` to change the color scheme:

\`\`\`css
--color-primary: #b51e1e;      /* Red */
--color-accent: #f0c240;       /* Yellow */
--color-green: #2e5e4e;        /* Green */
--color-cream: #f7f6f3;        /* Background */
\`\`\`

### Content

Edit `lib/data.ts` to modify all content (Vietnamese & English versions included).

### Fonts

Change fonts in `app/layout.tsx`:

\`\`\`tsx
import { Cute_Font as YourFont } from 'next/font/google'
\`\`\`

### Disable Animations

For users with motion sensitivity, animations automatically respect `prefers-reduced-motion`. To disable globally, edit `app/globals.css`.

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Accessibility

- ✅ Keyboard navigation support
- ✅ ARIA labels and roles
- ✅ Color contrast AA compliant
- ✅ Focus states visible
- ✅ Screen reader friendly
- ✅ Respects `prefers-reduced-motion`

## Performance

- ⚡ Optimized images with `next/image`
- 📦 Code splitting by route
- 🎯 Lazy loading for heavy components
- 💾 LocalStorage for user preferences
- 🚀 Static generation where possible

## License

CC BY-NC-SA 4.0 - Non-commercial educational use

## Support

For questions or issues, please open an issue on GitHub.

---

Built with Next.js, TypeScript, and ❤️
