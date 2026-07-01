/**
 * Total reviews — MUST match visible review count on site (schema + reviews page).
 * No reviews are available from the Facebook scrape for this business (0 reviews / not yet rated),
 * so this is intentionally empty rather than filled with fabricated testimonials.
 */
export const TOTAL_REVIEW_COUNT = 0;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [];
