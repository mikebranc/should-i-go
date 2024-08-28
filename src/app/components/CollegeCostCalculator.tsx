'use client'
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { InfoIcon } from 'lucide-react';

import { calculateTotalInterestPaid } from '../utils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const InfoTooltip = ({ content }: { content: string }) => (
  <TooltipProvider>
    <UITooltip>
      <TooltipTrigger asChild>
        <InfoIcon className="h-4 w-4 ml-1 inline-block cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </UITooltip>
  </TooltipProvider>
);

export default function CollegeCostCalculator() {
  const [tuition, setTuition] = useState(50000);
  const [loan, setLoan] = useState(40000);
  const [interest, setInterest] = useState(5);
  const [salaryWithoutCollege, setSalaryWithoutCollege] = useState(35000);
  const [salaryWithCollege, setSalaryWithCollege] = useState(55000);

  const [totalCost, setTotalCost] = useState(0);
  const [loanInterest, setLoanInterest] = useState(0);
  const [opportunityCost, setOpportunityCost] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const calculateCosts = () => {
    const interestCost = parseFloat(calculateTotalInterestPaid(loan, interest, 10));
    const opportunityCostValue = salaryWithoutCollege * 4; // Assuming 4 years of college
    const totalCostValue = Number(loan) + interestCost + opportunityCostValue;
    setLoanInterest(interestCost);
    setOpportunityCost(opportunityCostValue);
    setTotalCost(totalCostValue);
    setShowResults(true);
  };
  

  const data = [
    { name: "Tuition", value: tuition },
    { name: "Loan Interest", value: loanInterest },
    { name: "Opportunity Cost", value: opportunityCost },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCurrencyInput = (value: string, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    setter(isNaN(numericValue) ? 0 : numericValue);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip p-2 border border-gray-300 rounded shadow-md" style={{backgroundColor: '#FAFAFA', padding: '10px'}}>
          <p className="text-sm font-semibold">{`${data.name}: ${formatCurrency(data.value)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="max-w-2xl w-full mx-auto p-6">
      <CardHeader>
        <CardTitle>College Cost Calculator</CardTitle>
        <CardDescription>Figure out the true cost of college</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="tuition">Tuition Cost</Label>
          <Input
            id="tuition"
            type="text"
            value={formatCurrency(tuition)}
            onChange={(e) => handleCurrencyInput(e.target.value, setTuition)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="loan">Loan Amount</Label>
          <Input
            id="loan"
            type="text"
            value={formatCurrency(loan)}
            onChange={(e) => handleCurrencyInput(e.target.value, setLoan)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="interest">Interest Rate (%)</Label>
          <Input
            id="interest"
            type="text"
            value={interest === 0 ? '' : interest}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, '');
              const numericValue = parseFloat(value);
              setInterest(isNaN(numericValue) ? 0 : Math.min(numericValue, 100));
            }}
            onBlur={() => {
              if (interest !== 0) {
                setInterest(Number(interest.toFixed(2)));
              }
            }}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="no-college">Salary without College</Label>
          <Input
            id="no-college"
            type="text"
            value={formatCurrency(salaryWithoutCollege)}
            onChange={(e) => handleCurrencyInput(e.target.value, setSalaryWithoutCollege)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="with-college">Salary with College</Label>
          <Input
            id="with-college"
            type="text"
            value={formatCurrency(salaryWithCollege)}
            onChange={(e) => handleCurrencyInput(e.target.value, setSalaryWithCollege)}
          />
        </div>
        <Button onClick={calculateCosts}>Calculate</Button>
      </CardContent>
      {showResults && (
        <CardFooter>
          <div className="grid gap-4 w-full">
            <div>
              <h3 className="font-semibold">Total Cost</h3>
              <p className="text-4xl font-bold">{formatCurrency(totalCost)}</p>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Cost Breakdown</h3>
              <p>
                Tuition: {formatCurrency(tuition)}
                <InfoTooltip content="The direct cost of attending college for four years." />
              </p>
              <p>
                Loan Interest: {formatCurrency(loanInterest)}
                <InfoTooltip content="The total interest paid on your student loans over 10 years." />
              </p>
              <p>
                Opportunity Cost: {formatCurrency(opportunityCost)}
                <InfoTooltip content="The income you could have earned if you worked instead of attending college for four years." />
              </p>
            </div>
            <div className="grid gap-4">
              <h3 className="font-semibold">Cost Breakdown Chart</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
