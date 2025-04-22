export const calculateAmortization = (principal, termMonths, interestRate = 0.12) => {
    const monthlyRate = interestRate / 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
  };
  
export const calculateServiceFee = (principal, rate = 0.03) => principal * rate;
  
export const calculateLoanProtection = (principal, rate = 0.01) => principal * rate;
  