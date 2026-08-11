/**
 * Centralized remote image references (Unsplash), served via query params
 * requesting explicit width + auto format (webp when supported). Swap these
 * for the client's real photography in src/assets when available.
 */
function unsplash(id: string, width: number, height: number): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

export const images = {
  heroBg: unsplash("photo-1509391366360-2e959784a276", 1920, 1080),
  heroCardInvest: unsplash("photo-1508514177221-188b1cf16e9d", 480, 480),
  heroCardDiscount: unsplash("photo-1466611653911-95081537e5b7", 480, 480),

  aboutTeaser: unsplash("photo-1497440001374-f26997328c1b", 900, 700),
  aboutHero: unsplash("photo-1497440001374-f26997328c1b", 1200, 800),
  aboutTeam: unsplash("photo-1591825381744-1b58b7bb6a3a", 700, 600),

  finalCta: unsplash("photo-1620714223084-8fcacc6dfd8d", 1920, 900),

  service1: unsplash("photo-1508514177221-188b1cf16e9d", 700, 500),
  service2: unsplash("photo-1466611653911-95081537e5b7", 700, 500),
  service3: unsplash("photo-1497440001374-f26997328c1b", 700, 500),

  portfolio1: unsplash("photo-1509391366360-2e959784a276", 700, 500),
  portfolio2: unsplash("photo-1508514177221-188b1cf16e9d", 700, 500),
  portfolio3: unsplash("photo-1466611653911-95081537e5b7", 700, 500),
  portfolio4: unsplash("photo-1497440001374-f26997328c1b", 700, 500),
  portfolio5: unsplash("photo-1591825381744-1b58b7bb6a3a", 700, 500),
  portfolio6: unsplash("photo-1509391366360-2e959784a276", 700, 500),
} as const;
