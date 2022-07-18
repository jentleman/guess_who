function show_answer(event)
{
    for(var item of document.querySelectorAll("input"))
    {
        item.setAttribute('disabled', '');
    }
    const radio_id = event.srcElement.getAttribute('id');
    const label = document.querySelector("label[for='"+radio_id+"']");
    const links = ['unshaved.html', 'grandson.html', 'oldman.html', 'tideman.html'];
    document.getElementById('show-btn').setAttribute('href', links[radio_id - 1]);
    if (radio_id === '4')
    {
        label.setAttribute('class', label.getAttribute('class')+' right');
        document.getElementById('show-btn').innerHTML ='Tell me!';
    }
    else
    {
        label.setAttribute('class', label.getAttribute('class')+' wrong');
        document.getElementById('show-btn').innerHTML ='Show me!';
    }

    document.getElementById('tell_me').style.display = 'block';
}