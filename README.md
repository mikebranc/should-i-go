# College Cost Calculator

This project is a Next.js application that provides a comprehensive college cost calculator. It helps users estimate the true cost of attending college by considering tuition, loans, interest rates, and opportunity costs.

## Features

- Calculate total college costs including tuition, loan interest, and opportunity cost
- Visualize cost breakdown with an interactive pie chart
- Estimate break-even point based on expected salary differences

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/college-cost-calculator.git
   cd college-cost-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

The main components of this project are:

- `src/app/components/CollegeCostCalculator.tsx`: The main component for the calculator UI and logic
- `src/app/components/InfoTooltip.tsx`: A reusable tooltip component for providing additional information
- `src/app/utils.ts`: Utility functions for calculations

## Interest Calculation

The loan interest is calculated using the daily simple interest formula, which is commonly used for student loans. This method accrues interest daily based on the outstanding principal balance.

For more detailed information on how student loan interest is calculated, please refer to the official Federal Student Aid website:
[Understanding Interest Rates for Federal Student Loans](https://studentaid.gov/understand-aid/types/loans/interest-rates)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This tool is designed to help make more informed decisions about college costs. It provides estimates and should not be considered financial advice. Users should consult with financial professionals for personalized advice.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Recharts Library](https://recharts.org/en-US/)

## License

This project is currently not licensed for use, modification, or distribution. All rights are reserved by the author. If you're interested in using this project, please contact the repository owner for permission.
