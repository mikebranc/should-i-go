export function calculateTotalInterestPaid(
    loanAmount: number,
    annualInterestRate: number,
    loanDurationYears: number
  ): string {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const totalMonths = loanDurationYears * 12;
  
    // Calculate fixed monthly payment using the loan payment formula
    const monthlyPayment =
      loanAmount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  
    let remainingBalance = loanAmount;
    let totalInterestPaid = 0;
  
    for (let month = 1; month <= totalMonths; month++) {
      const interestForMonth = remainingBalance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestForMonth;
      totalInterestPaid += interestForMonth;
      remainingBalance -= principalPayment;
  
      console.log(`Interest for month ${month}: ${interestForMonth.toFixed(2)}`);
      console.log(`Principal payment for month ${month}: ${principalPayment.toFixed(2)}`);
    }
  
    return totalInterestPaid.toFixed(2);
  }
  
export function calculateBreakEvenYears(
  collegeCost: number,
  collegeSalary: number,
  hsSalary: number
): number | string {
  const salaryDifference = collegeSalary - hsSalary;

  if (salaryDifference <= 0) {
    return "College salary does not exceed high school salary, break-even not possible.";
  }

  const breakEvenYears = collegeCost / salaryDifference;
  return breakEvenYears;
}

  