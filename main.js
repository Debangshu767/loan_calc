//listen for submit
document.querySelector('.btn').addEventListener('click', function(e){
 //hide results
    document.getElementById('results').style.display = 'none';
    setTimeout(calculateResults , 1);


    e.preventDefault();
})

//calculate results

function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedinterest = parseFloat(interest.value) / 100 / 12;
    const calculatedpayments = parseFloat(years.value)*12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedinterest, calculatedpayments);
    const monthly = (principal*x*calculatedinterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedpayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedpayments)-principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
    }else {
        alert('please give valid inputs');
    }
    
} 

