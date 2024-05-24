export const validateStringStartsWith = (string, startsWith) => {
  return string.startsWith(startsWith);
};

export function validateIsStringApplicable(string) {
  return string !== "N/A";
}
