const aiSeverity = (text) => {

  const lowerText =
    text.toLowerCase();

  // HIGH
  if (

    lowerText.includes("accident")

    ||

    lowerText.includes("danger")

    ||

    lowerText.includes("huge")

    ||

    lowerText.includes("collapsed")

    ||

    lowerText.includes("emergency")

  ) {

    return "High";
  }

  // MEDIUM
  if (

    lowerText.includes("leak")

    ||

    lowerText.includes("overflow")

    ||

    lowerText.includes("not working")

    ||

    lowerText.includes("damaged")

  ) {

    return "Medium";
  }

  // LOW
  return "Low";
};

export default aiSeverity;