const textBox = document.getElementById("inpBox");


textBox.addEventListener("input",function() {
    let txtvalue = this.value;
    document.getElementById("char").innerText=txtvalue.length;
    // console.log(txtvalue);
    
    txtvalue = txtvalue.trim(); 

    let words = txtvalue.split(" ");
    let filterwords = words.filter(function(word,idx){
        return word !== '';
    })
    document.getElementById("words").innerText= filterwords.length;
    // console.log(filterwords);
})