export function calculateTotalInterestPaid(
    loanAmount: number,
    annualInterestRate: number,
    loanDurationYears: number
  ): string {
    const averageMonthLength = 365 / 12; // Average number of days per month
    const dailyInterestRate = annualInterestRate / 365 / 100;
    const totalMonths = loanDurationYears * 12;
    let remainingBalance = loanAmount;
    let totalInterestPaid = 0;
  
    for (let month = 1; month <= totalMonths; month++) {
      const interestForMonth = remainingBalance * dailyInterestRate * averageMonthLength;
      const principalPayment = loanAmount / totalMonths; // Simple amortization
      
      totalInterestPaid += interestForMonth;
      remainingBalance -= principalPayment; // Decrease the remaining balance
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

  