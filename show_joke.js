window.onload = function() {
    document.getElementById('tell_me').style.display = "none";
   };
   function show_answer(event)
   {
       for(var item of document.querySelectorAll("input"))
       {
           item.setAttribute('disabled', '');
       }
       const radio_name = event.srcElement.getAttribute('id');
       const label = document.querySelector("label[for='"+radio_name+"']");
       if (radio_name == 'btnradio4')
       {
           label.setAttribute('class', label.getAttribute('class')+' right');
       }
       else
       {
           label.setAttribute('class', label.getAttribute('class')+' wrong');
       }
       document.getElementById('tell_me').style.display = 'block';
   }
