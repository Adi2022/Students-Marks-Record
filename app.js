

const calcy = () => {
            let phy = document.getElementById('phy').value;
            let mat = document.getElementById('mat').value;
            let com = document.getElementById('com').value;
            let chem = document.getElementById('chem').value;
            let grades="";
           let totalGrades=parseFloat(phy)+parseFloat(mat)+parseFloat(com)+parseFloat(chem);

           let perc=(totalGrades/400)*100;
          

           if(perc <=100 && perc>=80){
            grades="A";
           }else if(perc<=79 && perc>=60){
            grades="B";
           }else if(perc<=79 && perc>=60){
            grades="B";
           }else if(perc<=59 && perc>=40){
            grades="C";
           }else{
            grades="F"
           }



           if(perc>=39.5){
            document.getElementById('showdata').innerHTML=`Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass.`
           }else{
            document.getElementById('showdata').innerHTML=`Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail.`
           }
          
        }
