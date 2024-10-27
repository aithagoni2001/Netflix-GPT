export const CheckValidateData = (email, password) => {
    // Define the regular expressions for validation
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    // Check if email is valid
    if (!emailPattern.test(email)) return "Email is not valid";
  
    // Check if password is valid
    if (!passwordPattern.test(password)) return "Password is not valid";
  
    // If both are valid, return null (no error message)
    return null;
  };
  