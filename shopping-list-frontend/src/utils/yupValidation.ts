import * as yup from "yup";

export const yupValidation = yup.object().shape({
  name: yup
    .string()
    .required("Product name is required")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long"),
  categoryId: yup
    .number()
    .typeError("Category is required")
    .required("Category is required")
    .moreThan(0, "Category is required"),
});
