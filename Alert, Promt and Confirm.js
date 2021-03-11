      //Alert in in-browser does not return anything
      alert("Are you sure");

      //Promt --> Take input before starting from user
      let age = prompt("What is your age", "18");
      console.log(age);

      if (age < 18) {
        console.log("Sorry, You are underage");
      } else {
        console.log("Enjoy the game");
      }

      //Confirm
      let warning = confirm("Are you sure you want to visit this website?");
      if (True) {
          console.log("Thankyou for visiting this website");
      }
      else{
          console.log("Visit another website...")
      }