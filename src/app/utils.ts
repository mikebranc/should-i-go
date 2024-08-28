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
  
  // Example usage:
  const loanAmount = 100000; // $100,000
  const annualInterestRate = 5; // 5% interest rate
  const loanDurationYears = 10; // 10 years
  
  const totalInterestPaid: string = calculateTotalInterestPaid(
    loanAmount,
    annualInterestRate,
    loanDurationYears
  );
  console.log(`Total Interest Paid: $${totalInterestPaid}`);
  