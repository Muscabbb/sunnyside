let count = 0;


document.querySelector(".icon").addEventListener('click', () => {
    count +=1;

    document.querySelector(".link-list").style.display = "flex";


    if(count == 2) {
        document.querySelector(".link-list").style.display = "none";
        count = 0;
    }

});