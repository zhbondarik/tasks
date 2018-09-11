name = prompt("Введите ваше имя:");
namecase = name;
eman = '';
x = 0;
for (i = 0; i<name.length; i++){
    if(name[i] >= '0' && name[i] <= '9')
    x++;
}
for(n=name.length-1; n>=0; n--){
       eman = eman.concat(name[n])
}
if( x > 0){
    for(i=0; i<name.length; i++){
        if (i%2){
            name[i].toUpperCase();
        }
        else
        name[i].toLowerCase();
    }

    document.write("Приветствую, " + name);
}
else
    document.write("Приветствую, " + eman)
