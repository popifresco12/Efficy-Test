const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {
  
    }
    start() {
      // Start modifying the form elements here!
      // You are allowed to add extra methods and properties to this class
      //Load the <select> options with the contents of the global oppoStatus array.
      var sel = document.getElementsByName("status")[0];
      for (var status of oppoStatus){
        var opt = document.createElement('option');
        opt.value = status.STATUS;
        opt.innerHTML = status.STATUS;
        sel.appendChild(opt);
      }

      //When status is changed, set the associated value of success (e.g. status 4 sets success=75)
      const success = document.getElementsByName("success")[0];
      sel.addEventListener('change', (event) => {
        for (var status of oppoStatus){
          if(sel.value == status.STATUS){
            success.value =  status.SUCCESS;
          }
        }
      });

      //On form submit, output the form element values as JSON string. We want to see the values, not the text. {"status":3,"success":50}
      const form = document.getElementsByTagName("form")[0];
      const output = document.getElementsByClassName("output")[0];
      form.addEventListener('submit', (event) => {
        //console.log("{status:"+ sel.value +", success: "+ success.value +"}")
        output.innerHTML = " {status:"+ sel.value +", success: "+ success.value +"}";
        event.preventDefault();
      });
    }
  }
  
  const main = new Module();
  main.start();