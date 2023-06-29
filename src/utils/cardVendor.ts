export const getVendor = (number: string) => {
  const patterns: Record<string, RegExp> = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard:
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (const vendor in patterns) {
    if (patterns[vendor].test(number)) {
      return vendor;
    }
  }

  return null;
};
