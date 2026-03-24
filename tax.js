document.getElementById('taxform').addEventListener('submit', function (event) {
    event.preventDefault()
    let basicsalary = Number(document.getElementById('basic').value)
    let benefits = Number(document.getElementById('benefits').value)

    function calculate_gross(basicsalary, benefits) {
        return basicsalary + benefits
    }
    let gross_salary = calculate_gross(basicsalary, benefits);
    document.getElementById('gross').innerHTML = gross_salary

    function calculate_nhif(gross) {
        let nhif;
        if (gross > 0 && gross <= 5999) {
            nhif = 150
        } else if (gross >= 6000 && gross <= 7999) {
            nhif = 300
        } else if (gross >= 8000 && gross <= 11999) {
            nhif = 400
        } else if (gross >= 12000 && gross <= 14999) {
            nhif = 500
        } else if (gross >= 15000 && gross <= 19999) {
            nhif = 600
        } else if (gross >= 20000 && gross <= 24999) {
            nhif = 750
        } else if (gross >= 25000 && gross <= 29999) {
            nhif = 850
        } else if (gross >= 30000 && gross <= 34999) {
            nhif = 900
        } else if (gross >= 35000 && gross <= 39999) {
            nhif = 950
        } else if (gross >= 40000 && gross <= 44999) {
            nhif = 1000
        } else if (gross >= 45000 && gross <= 49999) {
            nhif = 1100
        } else if (gross >= 50000 && gross <= 59999) {
            nhif = 1200
        } else if (gross >= 60000 && gross <= 69999) {
            nhif = 1300
        } else if (gross >= 70000 && gross <= 79999) {
            nhif = 1400
        } else if (gross >= 80000 && gross <= 89999) {
            nhif = 1500
        } else if (gross >= 90000 && gross <= 99999) {
            nhif = 1600
        } else {
            nhif = 1700
        }
        return nhif
    }
    let nhif = calculate_nhif(gross_salary)
    document.getElementById('nhif').innerHTML = nhif;

    function calculate_nssf(gross) {
        let nssf
        if (gross >= 18000) {
            nssf = 1080
        } else {
            nssf = gross * 0.06
        }
        return nssf
    }
    let nssf = calculate_nssf(gross_salary)
    document.getElementById('nssf').innerHTML = nssf;

    function calculate_nhdf(gross) {
        return gross * 0.015
    }
    let nhdf = calculate_nhdf(gross_salary)
    document.getElementById('nhdf').innerHTML = nhdf;

    function calculate_taxable_income(gross, nssf, nhdf, nhif) {
        let taxable_income = gross - (nssf + nhdf + nhif)
        return taxable_income
    }
    let taxable_income = calculate_taxable_income(gross_salary, nssf, nhdf, nhif)
    document.getElementById('taxableIncome').innerHTML = taxable_income;

    function calculate_payee(taxable_income) {
        let payee;
        if (taxable_income > 0 && taxable_income <= 24000) {
            payee = taxable_income * 0.10
        } else if (taxable_income > 24000 && taxable_income <= 40000) {
            payee = 2400 + (taxable_income - 24000) * 0.15
        } else if (taxable_income > 40000 && taxable_income <= 60000) {
            payee = 4800 + (taxable_income - 40000) * 0.20
        } else if (taxable_income > 60000 && taxable_income <= 90000) {
            payee = 8800 + (taxable_income - 60000) * 0.25
        } else if (taxable_income > 90000) {
            payee = 16300 + (taxable_income - 90000) * 0.30
        } else {
            payee = 0
        }
        return payee
    }
    let payee = calculate_payee(taxable_income)
    document.getElementById('payee').innerHTML = payee;

    function calculate_net_salary(gross, nhif, nhdf, nssf, payee) {
        return gross - (nhif + nhdf + nssf + payee)
    }
    let net_salary = calculate_net_salary(gross_salary, nhif, nhdf, nssf, payee)
    document.getElementById('netSalary').innerHTML = net_salary;
})
