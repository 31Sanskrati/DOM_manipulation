function hide() {
    let para = document.getElementById('para');
    // para.addEventListener('mouseover', function run(){
    //   alert('Mouse Inside')
    // });
    // para.addEventListener('mouseout', function run(){
    //   alert('Mouse Outside')
    // });
    para.addEventListener('mouseover', function run(){
      console.log('Mouse Inside');
    });
    para.addEventListener('mouseout', function run(){
      console.log('Mouse Outside');
    });

    let btn = document.getElementById("btn");
    if (para.style.display != "none") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  }