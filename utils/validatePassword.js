const validatePassword = (input) => {
  const testRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8}/;
  return testRegex.test(input);
};

const passwordMatch = (value) => {
  const { password, confirmPassword } = value;
  const isPasswordMatch = password === confirmPassword;
  return isPasswordMatch;
};

export { validatePassword, passwordMatch };
