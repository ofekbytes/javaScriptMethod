

window.onload = function () 
{
    console.log("onload");
    $(document).ready(function () {
        fnEventListener();
    });

}


function fnEventListener()
{
    //document.getElementById('submit').addEventListener('click', fnsubmit);
    document.getElementById('excel-export').addEventListener('click',function() 
    {
  
      // $('#mpTableData').table2CSV({header:['prefix','Employee Name','Contact']});
      
      console.log(" excel-export > click ");
  
      $("#mpTableData").table2excel({
        exclude: ".noExl",
        name: "mp-doc", //Excel Document Name
        filename: "mp-" + new Date().toISOString().replace(/[\-\:\.]/g, ""),
        fileext: ".xls",
        exclude_img: false,
        exclude_links: false,
        exclude_inputs: false
      })
})


document.getElementById('save-as').addEventListener('click',function() 
{
    console.log("save-as button pressed"); //temp//

})

// document.getElementById('load').addEventListener('click',function() 
// {
//     console.log("load button pressed"); //temp//

//    document.getElementById("output").innerHTML = "load...";
   
// })

}