export function categoryBackgroundColor(categoryName: string) {
  switch (categoryName.toLowerCase()) {
    case "cleaning products":
      return "bg-warning-subtle text-warning";
    case "dairy":
      return "bg-primary-subtle text-primary";
    case "fruits and vegetables":
      return "bg-success-subtle text-success";
    case "meat and fish":
      return "bg-danger-subtle text-danger";
    case "bakery":
      return "bg-info-subtle text-info";
    default:
      return "bg-secondary-subtle text-secondary";
  }
}
