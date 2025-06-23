export function capitalize(str: string): string {
  if (!str) return "";
  const lower = str.trim().toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
