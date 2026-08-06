import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes correctly, resolving conflicts.
 * Uses clsx for conditional logic and tailwind-merge for deduplication.
 *
 * @param {...(string|undefined|null|boolean|Object|Array)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
