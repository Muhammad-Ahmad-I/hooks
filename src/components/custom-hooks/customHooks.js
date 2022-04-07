import React, { useState } from "react";

const useInput = () => {
  const [checkStringStatus, setcheckStringStatus] = useState();

  const validateName = (name) => {
    const validChar = new RegExp(/^[a-zA-Z]+$/);
    const validateNameChar = validChar.test(name);
    setcheckStringStatus(validateNameChar);
    return validateNameChar;
  };

  return {
    validateName,
    checkStringStatus,
  };
};

export default useInput;
