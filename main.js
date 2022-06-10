  quick_draw_set_data=["ant","aircraft carrier","cup","alarm clock"];
  random_no = Math.floor((Math.random()*quick_draw_set_data.length)+1);
  Element_of_array = quick_draw_set_data[random_no];

  document.getElementById("sketch_to_be_drawn").innerHTML = " Sketch To Be Drawn : " +Element_of_array;

  timer_counter =0;
  timer_check= "";
  drawn_sketch ="";
  answer_holder="";
  score =0;     
  sketch = Element_of_array;
  
  function draw(){
    canvas = createCanvas(280,280)
    canvas.center()
    background("white")
    check_sketch();
    if(drawn_sketch == sketch){
      answer_holder = "set";
      score = score+1;
      document.getElementById("score").innerHTML ="Score :" +1;
    }

  }

   function check_sketch(){
     timer_counter++;
     document.getElementById("timer").innerHTML = "Timer :"+timer_counter;
     if(timer_counter>500){
       timer_counter = 0;
       timer_check ="completed";
     }
     if(timer_check == "completed" || answer_holder == "set"){
       timer_check = "";
       answer_holder= "";
       update_canvas();
     }
   }

   function update_canvas(){
     background("white");
     quick_draw_set_data=["ant","aircraft carrier","cup","alarm clock"];
     random_no = Math.floor((Math.random()*quick_draw_set_data.length)+1);
     Element_of_array = quick_draw_set_data[random_no];
     sketch = Element_of_array;
     document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+sketch;
   }
