
let basic_salary = Number(prompt("Enter basic salary"))
let benefits = Number(prompt("Enter your benefits"))

function calculate_gross(basic,benefits){
    return basic + benefits
}
let gross_salary = calculate_gross(basic_salary,benefits)
console.log(gross_salary)


function calculate_nhif(gross){
    let nhif;
    if(gross >0 && gross <= 5999){
       nhif = 150  
    }else if(gross >= 6000 && gross <= 7999){
        nhif = 300
    }else if(gross >= 8000 && gross <= 11999){
        nhif = 400
    }else if(gross >= 12000 && gross <= 14999){
        nhif = 500
    }else if(gross >= 15000 && gross <= 19999){
        nhif = 600
    }else if(gross >= 20000 && gross <= 24999){
        nhif = 750
    }else if(gross >= 25000 && gross <= 29999){
        nhif = 850
    }else if(gross >= 30000 && gross <= 34999){
        nhif = 900
    }else if(gross >= 35000 && gross <= 39999){
        nhif = 950
    }else if(gross >= 40000 && gross <= 44999){
        nhif = 1000
    }else if(gross >= 45000 && gross <= 49999){
        nhif = 1100
    }else if(gross >= 50000 && gross <= 59999){
        nhif = 1200
    }else if(gross >= 60000 && gross <= 69999){
        nhif = 1300
    }else if(gross >= 70000 && gross <= 79999){
        nhif = 1400
    }else if(gross >= 80000 && gross <= 89999){
        nhif = 1500
    }else if(gross >= 90000 && gross <= 99999){
        nhif = 1600
    }else{
        nhif = 1700
    }
    return nhif
}
let nhif = calculate_nhif(gross_salary)
console.log(nhif)



function calculate_nssf(gross){
    let nssf
    if (gross >=18000){
        nssf = 1080
    }else{
        nssf = gross * 0.06
    }
    return nssf
}
let nssf = calculate_nssf(gross_salary)
console.log(nssf)



function calculate_nhdf(gross){
    return gross * 0.015
}
let nhdf = calculate_nhdf(gross_salary)
console.log(nhdf)



function calculate_taxable_income(gross,nssf,nhdf,nhif){
    let taxable_income = gross - (nssf + nhdf + nhif)
    return taxable_income
}
let taxable_income = calculate_taxable_income(gross_salary,nssf,nhdf,nhif)
console.log(taxable_income)
