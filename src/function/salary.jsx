import React from 'react';

const Salary = ({ salary1, salary2 }) => {
    const formatToRp = (salary) => {
        if (salary === 0) return "Unpaid";
        const salaryString = salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `Rp ${salaryString}`;
    };

    return (
        <span>{salary1 === 0 && salary2 === 0 ? "Unpaid" : `${formatToRp(salary1)} - ${formatToRp(salary2)}`}</span>
    );
}

export default Salary;
