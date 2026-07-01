/** Total reviews — MUST match visible review count on site (schema + reviews page). */
export const TOTAL_REVIEW_COUNT = 3;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [
  {
    name: "Iain Donald",
    meta: "Facebook review",
    time: "recommended",
    initial: "I",
    initialBg: "bg-green-600",
    text: "Our grass hadn't been cut for 2 months, messaged them and they were out within the hour. Top quality. Would definitely recommend them if anyone is looking for their grass to be done.",
  },
  {
    name: "Sharon Wallace",
    meta: "Facebook review",
    time: "recommended",
    initial: "S",
    initialBg: "bg-emerald-500",
    text: "2nd time I've had front and back garden done, highly recommend, great job, 10/10.",
  },
  {
    name: "Nic Coutts",
    meta: "Facebook review",
    time: "recommended",
    initial: "N",
    initialBg: "bg-lime-600",
    text: "First time using Landscaping Ltd, front and back garden got cut, done a great job, will be using this company from now on. Friendly couple, fast and efficient service provided.",
  },
];
