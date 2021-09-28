const totalBill = document.querySelector("#total-bill");
const cashGiven = document.querySelector("#cash-given");
const calcButton = document.querySelector("#calculate");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const Next = document.querySelector("#next-button");
const Nextsection = document.querySelector("#next-display");

const availableDenominations = [2000,500,100,20,10,5,1];

Nextsection.style.display = "none";


Next.addEventListener("click",function nextDisplay(){
    if (Number(totalBill.value)){
        Nextsection.style.display = "block";
        Next.style.display = "none";
    }
});

calcButton.addEventListener("click",function inputValidation() {
     hideMessage();
    if  (Number(totalBill.value) > 0){
        if (Number(cashGiven.value) >= Number(totalBill.value)) {
             const differenceValue = cashGiven.value - totalBill.value;
             calculateChange(differenceValue);
             console.log(differenceValue);
        }else{
            showMessage("Dear customer you need to pay in full");
        }

    }else{
        showMessage("Invalid Bill Amount");
    }
});

//200/1000 = 800

function calculateChange(differenceValue){
    for (i=0;i< availableDenominations.length;i++){
        const numberOfNotes = Math.trunc(differenceValue / availableDenominations[i]);
        differenceValue = differenceValue % availableDenominations[i]; 
        noOfNotes[i].innerText = numberOfNotes; 
    }

}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}