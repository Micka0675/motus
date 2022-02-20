var ligne1 = document.getElementsByClassName("ligne1");
var ligne2 = document.getElementsByClassName("ligne2");
var ligne3 = document.getElementsByClassName("ligne3");
var ligne4 = document.getElementsByClassName("ligne4");
var ligne5 = document.getElementsByClassName("ligne5");
var cases = document.getElementsByClassName("cases");
var valeur = document.querySelectorAll("input").value;
var play = document.getElementById("play");
var zoneJeu = document.getElementById("zoneJeu");
var zoneWin = document.getElementById("zoneWin");
var retent1 = document.getElementById("retry1");
var retent2 = document.getElementById("retry2");
var regles = document.getElementById("reglesDuJeu");
var listMot = [
    "manie",
    "dates",
    "cadet",
    "furet",
    "cafes",
    "leger",
    "untel",
    "veine",
    "boire",
    "beton",
    "jouir",
    "cuite",
    "servi",
    "ideal",
    "final",
    "figue",
    "saine",
    "route",
    "grecs",
    "opera",
    "bisou",
    "poete",
    "optez",
    "clous",
    "bijou",
    "files",
    "enfin",
    "opium",
    "javel",
    "heros",
    "feras",
    "plans",
    "icone",
    "liste",
    "sevir",
    "bases",
    "chaud",
    "piste",
    "grade",
    "roule",
    "goute",
    "repas",
    "ecran",
    "nuque",
    "serai",
    "firme",
    "versa",
    "index",
    "flute",
    "plage",
    "reste",
    "menus",
    "repos",
    "style",
    "cogne",
    "verso",
    "grade",
    "sucre",
    "crade",
    "cable",
    "mains",
    "minou",
    "clefs",
    "grief",
    "sauce",
    "acier",
    "canon",
    "cotes",
    "baton",
    "petit",
    "munir",
    "rager",
    "cuire",
    "stylo",
    "fleau",
    "repit",
    "aimer",
    "pains",
    "momie",
    "pluie",
    "laics",
    "badge",
    "lents",
    "caste",
    "clips",
    "vodka",
    "grues",
    "prise",
    "fauve",
    "dicte",
    "neufs",
    "sonde",
    "saute",
    "ecart",
    "barbe",
    "decus",
    "cotes",
    "plein",
    "dunes",
    "races",
    "recul",
    "porte",
    "ecole",
    "paris"];


var motChoisi = listMot[Math.floor(Math.random()*103)];
var charAtrouv = [];
var tabRep = [];
var essai = 0;
console.log(ligne1);
console.log(motChoisi);
retent1.addEventListener('click',recharge);
retent2.addEventListener('click',recharge);

function recharge()
{
    location.reload();
}

for (i = 0 ; i < 5 ; i ++)
{
    charAtrouv.push(motChoisi[i]);
}
console.log(charAtrouv);

play.addEventListener('click', partie);

function partie()
{
        
    
    ligne1[0].disabled = false;
    
    play.style.visibility = "hidden";
    regles.style.display = "none";
    zoneJeu.style.display = "block";
    ligne1[0].focus();
        ligne1[0].addEventListener("keypress" , check);
        function check(event)
        {
            if(event.key === "Enter")
            {
                ligne1[0].value; 
                tabRep.push(ligne1[0].value);
                if (ligne1[0].value == charAtrouv[0])
                {
                    ligne1[0].style.backgroundColor = "red";
                    ligne1[0].disabled = true;
                    ligne1[1].disabled = false;
                    ligne1[1].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne1[0].value == charAtrouv[i] && ligne1[0].value !== charAtrouv[0])
                        {
                            ligne1[0].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne1[0].disabled = true;
                            ligne1[1].disabled = false;
                            ligne1[1].focus();
                        }
                        else
                        {
                            ligne1[0].disabled = true;
                            ligne1[1].disabled = false;
                            ligne1[1].focus();
                        }
                    }
            }
        console.log(ligne1[0].value);               
        }
        ligne1[1].addEventListener("keypress" , check2);
        function check2(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne1[1].value);
                if (ligne1[1].value == charAtrouv[1])
                {
                    ligne1[1].style.backgroundColor = "red";
                    ligne1[1].disabled = true;
                    ligne1[2].disabled = false;
                    ligne1[2].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne1[1].value == charAtrouv[i] && ligne1[1].value !== charAtrouv[1] && ligne1[1].value !== ligne1[0].value)
                        {
                            ligne1[1].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne1[1].disabled = true;
                            ligne1[2].disabled = false;
                            ligne1[2].focus();
                        }
                        else
                        {
                            ligne1[1].disabled = true;
                            ligne1[2].disabled = false;
                            ligne1[2].focus();
                        }
                    }
                    
            }  
            console.log(ligne1[1].value);
        }
        ligne1[2].addEventListener("keypress" , check3);
        function check3(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne1[2].value);
                if (ligne1[2].value == charAtrouv[2])
                {
                    ligne1[2].style.backgroundColor = "red";
                    ligne1[2].disabled = true;
                    ligne1[3].disabled = false;
                    ligne1[3].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne1[2].value == charAtrouv[i] && ligne1[2].value !== charAtrouv[2] && ligne1[2].value !== ligne1[0].value && ligne1[2].value !== ligne1[1].value )
                        {
                            ligne1[2].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne1[2].disabled = true;
                            ligne1[3].disabled = false;
                            ligne1[3].focus();
                        }
                        else
                        {
                            ligne1[2].disabled = true;
                            ligne1[3].disabled = false;
                            ligne1[3].focus();
                        }
                    }
                    
            }
            console.log(ligne1[2].value);
        }
        ligne1[3].addEventListener("keypress" , check4);
        function check4(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne1[3].value);
                if (ligne1[3].value == charAtrouv[3])
                {
                    ligne1[3].style.backgroundColor = "red";
                    ligne1[3].disabled = true;
                    ligne1[4].disabled = false;
                    ligne1[4].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne1[3].value == charAtrouv[i] && ligne1[3].value !== charAtrouv[3] && ligne1[3].value !== ligne1[0].value && ligne1[3].value !== ligne1[1].value && ligne1[3].value !== ligne1[2].value)
                        {
                            ligne1[3].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne1[3].disabled = true;
                            ligne1[4].disabled = false;
                            ligne1[4].focus();
                        }
                        else
                        {
                            ligne1[3].disabled = true;
                            ligne1[4].disabled = false;
                            ligne1[4].focus();
                        }
                    }
                    
            }
            console.log(ligne1[3].value);
        }
        ligne1[4].addEventListener("keypress" , check5);
        function check5(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne1[4].value);
                if (ligne1[4].value == charAtrouv[4])
                {
                    ligne1[4].style.backgroundColor = "red";
                    var testRep = tabRep.join("");
                    var compRep = charAtrouv.join("");
                    if(testRep == compRep)
                    {
                        zoneJeu.style.display = "none";
                        zoneWin.style.display = "block";
                        retry1.style.display = "block";
                        zoneWin.innerHTML = "<p>Superbe! <br> Le mot était effectivement: "+ compRep +" Voulez vous essayer de nouveau?</p>";
                    }
                    else
                    {
                        ligne1[4].disabled = true;
                        ligne2[0].disabled = false;
                        ligne2[0].focus();
                    }
                }   
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne1[4].value == charAtrouv[i] && ligne1[4].value !== charAtrouv[4] && ligne1[4].value !== ligne1[0].value && ligne1[4].value !== ligne1[1].value && ligne1[4].value !== ligne1[2].value && ligne1[4].value !== ligne1[3].value)
                        {
                            ligne1[4].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne1[4].disabled = true;
                            ligne2[0].disabled = false;
                            ligne2[0].focus();
                        }
                        else
                        {
                            ligne1[4].disabled = true;
                            ligne2[0].disabled = false;
                            ligne2[0].focus();
                        }
                    }
                        
            }
            console.log(ligne1[4].value);
        }
    
        ligne2[0].addEventListener("keypress" , check6);
        function check6(event)
        {
            tabRep = [];
            if(event.key === "Enter")
            {
                tabRep.push(ligne2[0].value);
                if (ligne2[0].value == charAtrouv[0])
                {
                    ligne2[0].style.backgroundColor = "red";
                    ligne2[0].disabled = true;
                    ligne2[1].disabled = false;
                    ligne2[1].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne2[0].value == charAtrouv[i] && ligne2[0].value != charAtrouv[0])
                        {
                            ligne2[0].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne2[0].disabled = true;
                            ligne2[1].disabled = false;
                            ligne2[1].focus();
                        }
                        else
                        {
                            ligne2[0].disabled = true;
                            ligne2[1].disabled = false;
                            ligne2[1].focus();
                        }
                    }
                    
            }
        }
        ligne2[1].addEventListener("keypress" , check7);
        function check7(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne2[1].value);
                if (ligne2[1].value == charAtrouv[1])
                {
                    ligne2[1].style.backgroundColor = "red";
                    ligne2[1].disabled = true;
                    ligne2[2].disabled = false;
                    ligne2[2].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne2[1].value == charAtrouv[i] && ligne2[1].value != charAtrouv[1] && ligne2[1].value != ligne2[0].value)
                        {
                            ligne2[1].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne2[1].disabled = true;
                            ligne2[2].disabled = false;
                            ligne2[2].focus();
                        }
                        else
                        {
                            ligne2[1].disabled = true;
                            ligne2[2].disabled = false;
                            ligne2[2].focus();
                        }
                    }
                    
            }
        }
        ligne2[2].addEventListener("keypress" , check8);
        function check8(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne2[2].value);
                if (ligne2[2].value == charAtrouv[2])
                {
                    ligne2[2].style.backgroundColor = "red";
                    ligne2[2].disabled = true;
                    ligne2[3].disabled = false;
                    ligne2[3].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne2[2].value == charAtrouv[i] && ligne2[2].value != charAtrouv[2] && ligne2[2].value != ligne2[0].value && ligne2[2].value != ligne2[1].value)
                        {
                            ligne2[2].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne2[2].disabled = true;
                            ligne2[3].disabled = false;
                            ligne2[3].focus();
                        }
                        else
                        {
                            ligne2[2].disabled = true;
                            ligne2[3].disabled = false;
                            ligne2[3].focus();
                        }
                    }
                    
            }
        }
        ligne2[3].addEventListener("keypress" , check9);
        function check9(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne2[3].value);
                if (ligne2[3].value == charAtrouv[3])
                {
                    ligne2[3].style.backgroundColor = "red";
                    ligne2[3].disabled = true;
                    ligne2[4].disabled = false;
                    ligne2[4].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne2[3].value == charAtrouv[i] && ligne2[3].value != charAtrouv[3] && ligne2[3].value != ligne2[0].value && ligne2[3].value != ligne2[1].value && ligne2[3].value != ligne2[2].value)
                        {
                            ligne2[3].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne2[3].disabled = true;
                            ligne2[4].disabled = false;
                            ligne2[4].focus();
                        }
                        else
                        {
                            ligne2[3].disabled = true;
                            ligne2[4].disabled = false;
                            ligne2[4].focus();
                        }
                    }
                    
            }
        }
        ligne2[4].addEventListener("keypress" , check10);
        function check10(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne2[4].value);
                if (ligne2[4].value == charAtrouv[4])
                {
                    ligne2[4].style.backgroundColor = "red";
                    var testRep = tabRep.join("");
                    var compRep = charAtrouv.join("");
                    console.log(testRep);
                    if(testRep == compRep)
                    {
                        zoneJeu.style.display = "none";
                        zoneWin.style.display = "block";
                        retry1.style.display = "block";
                        zoneWin.innerHTML = "<p>Superbe! Le mot était effectivement: "+ compRep +"</p><p>Voulez vous essayer de nouveau?</p>";
                    }
                    else
                    {
                        ligne2[4].disabled = true;
                        ligne3[0].disabled = false;
                        ligne3[0].focus();
                    }
                }
                else
                
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne2[4].value == charAtrouv[i] && ligne2[4].value != charAtrouv[4] && ligne2[4].value != ligne2[0].value && ligne2[4].value != ligne2[1].value && ligne2[4].value != ligne2[2].value && ligne2[4].value != ligne2[3].value)
                        {
                            ligne2[4].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne2[4].disabled = true;
                            ligne3[0].disabled = false;
                            ligne3[0].focus();
                        }
                        else
                        {
                            ligne2[4].disabled = true;
                            ligne3[0].disabled = false;
                            ligne3[0].focus();
                        }
                    }
                      
                
            }
            essai ++;
        }
        ligne3[0].addEventListener("keypress" , check11);
        function check11(event)
        {
            tabRep = [];
            if(event.key === "Enter")
            {
                tabRep.push(ligne3[0].value);
                if (ligne3[0].value == charAtrouv[0])
                {
                    ligne3[0].style.backgroundColor = "red";
                    ligne3[0].disabled = true;
                    ligne3[1].disabled = false;
                    ligne3[1].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne3[0].value == charAtrouv[i] && ligne3[0].value != charAtrouv[0])
                        {
                            ligne3[0].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne3[0].disabled = true;
                            ligne3[1].disabled = false;
                            ligne3[1].focus();
                        }
                        else
                        {
                            ligne3[0].disabled = true;
                            ligne3[1].disabled = false;
                            ligne3[1].focus();
                        }
                    }
                    
            }
        }
        ligne3[1].addEventListener("keypress" , check12);
        function check12(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne3[1].value);
                if (ligne3[1].value == charAtrouv[1])
                {
                    ligne3[1].style.backgroundColor = "red";
                    ligne3[1].disabled = true;
                    ligne3[2].disabled = false;
                    ligne3[2].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne3[1].value == charAtrouv[i] && ligne3[1].value != charAtrouv[1] && ligne3[1].value != ligne3[0].value)
                        {
                            ligne3[1].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne3[1].disabled = true;
                            ligne3[2].disabled = false;
                            ligne3[2].focus();
                        }
                        else
                        {
                            ligne3[1].disabled = true;
                            ligne3[2].disabled = false;
                            ligne3[2].focus();
                        }
                    }
                }    
            }
        }
        ligne3[2].addEventListener("keypress" , check13);
        function check13(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne3[2].value);
                if (ligne3[2].value == charAtrouv[2])
                {
                    ligne3[2].style.backgroundColor = "red";
                    ligne3[2].disabled = true;
                    ligne3[3].disabled = false;
                    ligne3[3].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne3[2].value == charAtrouv[i] && ligne3[2].value != charAtrouv[2] && ligne3[2].value != ligne3[0].value && ligne3[2].value != ligne3[1].value)
                        {
                            ligne3[2].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne3[2].disabled = true;
                            ligne3[3].disabled = false;
                            ligne3[3].focus();
                        }
                        else
                        {
                            ligne3[2].disabled = true;
                            ligne3[3].disabled = false;
                            ligne3[3].focus();
                        }
                    }
                }    
            }
        }
        ligne3[3].addEventListener("keypress" , check14);
        function check14(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne3[3].value);
                if (ligne3[3].value == charAtrouv[3])
                {
                    ligne3[3].style.backgroundColor = "red";
                    ligne3[3].disabled = true;
                    ligne3[4].disabled = false;
                    ligne3[4].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne3[3].value == charAtrouv[i] && ligne3[3].value != charAtrouv[3] && ligne3[3].value != ligne3[0].value && ligne3[3].value != ligne3[1].value && ligne3[3].value != ligne3[2].value)
                        {
                            ligne3[3].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne3[3].disabled = true;
                            ligne3[4].disabled = false;
                            ligne3[4].focus();
                        }
                        else
                        {
                            ligne3[3].disabled = true;
                            ligne3[4].disabled = false;
                            ligne3[4].focus();
                        }
                    }
                }    
            }
        }
        ligne3[4].addEventListener("keypress" , check15);
        function check15(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne3[4].value);
                if (ligne3[4].value == charAtrouv[4])
                {
                    ligne3[4].style.backgroundColor = "red";
                    var testRep = tabRep.join("");
                    var compRep = charAtrouv.join("");
                    console.log(testRep);
                    if(testRep == compRep)
                    {
                        zoneJeu.style.display = "none";
                        zoneWin.style.display = "block";
                        retry1.style.display = "block";
                        zoneWin.innerHTML = "<p>Superbe! Le mot était effectivement: "+ compRep +"</p><p>Voulez vous essayer de nouveau?</p>"
                    }
                    else
                    {
                        ligne3[4].disabled = true;
                        ligne4[0].disabled = false;
                        ligne4[0].focus();
                    }
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne3[4].value == charAtrouv[i] && ligne3[4].value != charAtrouv[4] && ligne3[4].value != ligne3[0].value && ligne3[4].value != ligne3[1].value && ligne3[4].value != ligne3[2].value && ligne3[4].value != ligne3[3].value)
                        {
                            ligne3[4].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne3[4].disabled = true;
                            ligne4[0].disabled = false;
                            ligne4[0].focus();
                        }
                        else
                        {
                            ligne3[4].disabled = true;
                            ligne4[0].disabled = false;
                            ligne4[0].focus();
                        }
                    }
                }       
                
            }
            essai ++;
        }
        ligne4[0].addEventListener("keypress" , check16);
        function check16(event)
        {
            tabRep = [];
            if(event.key === "Enter")
            {
                tabRep.push(ligne4[0].value);
                if (ligne4[0].value == charAtrouv[0])
                {
                    ligne4[0].style.backgroundColor = "red";
                    ligne4[0].disabled = true;
                    ligne4[1].disabled = false;
                    ligne4[1].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne4[0].value == charAtrouv[i] && ligne4[0].value != charAtrouv[0])
                        {
                            ligne4[0].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne4[0].disabled = true;
                            ligne4[1].disabled = false;
                            ligne4[1].focus();
                        }
                        else
                        {
                            ligne4[0].disabled = true;
                            ligne4[1].disabled = false;
                            ligne4[1].focus();
                        }
                    }
                }   
            }
        }
        ligne4[1].addEventListener("keypress" , check17);
        function check17(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne4[1].value);
                if (ligne4[1].value == charAtrouv[1])
                {
                    ligne4[1].style.backgroundColor = "red";
                    ligne4[1].disabled = true;
                    ligne4[2].disabled = false;
                    ligne4[2].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne4[1].value == charAtrouv[i] && ligne4[1].value != charAtrouv[1] && ligne4[1].value != ligne4[0].value)
                        {
                            ligne4[1].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne4[1].disabled = true;
                            ligne4[2].disabled = false;
                            ligne4[2].focus();
                        }
                        else
                        {
                            ligne4[1].disabled = true;
                            ligne4[2].disabled = false;
                            ligne4[2].focus();
                        }
                    }
                }    
            }
        }
        ligne4[2].addEventListener("keypress" , check18);
        function check18(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne4[2].value);
                if (ligne4[2].value == charAtrouv[2])
                {
                    ligne4[2].style.backgroundColor = "red";
                    ligne4[2].disabled = true;
                    ligne4[3].disabled = false;
                    ligne4[3].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne4[2].value == charAtrouv[i] && ligne4[2].value != charAtrouv[2] && ligne4[2].value != ligne4[0].value && ligne4[2].value != ligne4[1].value)
                        {
                            ligne4[2].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne4[2].disabled = true;
                            ligne4[3].disabled = false;
                            ligne4[3].focus();
                        }
                        else
                        {
                            ligne4[2].disabled = true;
                            ligne4[3].disabled = false;
                            ligne4[3].focus();
                        }
                    }
                }    
            }
        }
        ligne4[3].addEventListener("keypress" , check19);
        function check19(event)
        {
            tabRep.push(ligne4[3].value);
            if(event.key === "Enter")
            {
                if (ligne4[3].value == charAtrouv[3])
                {
                    ligne4[3].style.backgroundColor = "red";
                    ligne4[3].disabled = true;
                    ligne4[4].disabled = false;
                    ligne4[4].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne4[3].value == charAtrouv[i] && ligne4[3].value != charAtrouv[3] && ligne4[3].value != ligne4[0].value && ligne4[3].value != ligne4[1].value && ligne4[3].value != ligne4[2].value)
                        {
                            ligne4[3].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne4[3].disabled = true;
                            ligne4[4].disabled = false;
                            ligne4[4].focus();
                        }
                        else
                        {
                            ligne4[3].disabled = true;
                            ligne4[4].disabled = false;
                            ligne4[4].focus();
                        }
                    }
                }
            }
        }
        ligne4[4].addEventListener("keypress" , check20);
        function check20(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne4[4].value);
                if (ligne4[4].value == charAtrouv[4])
                {
                    ligne4[4].style.backgroundColor = "red";
                    var testRep = tabRep.join("");
                    var compRep = charAtrouv.join("");
                    console.log(testRep);
                    if(testRep == compRep)
                    {
                        zoneJeu.style.display = "none";
                        zoneWin.style.display = "block";
                        retry1.style.display = "block";
                        zoneWin.innerHTML = "<p>Superbe! Le mot était effectivement: "+ compRep +"</p><p>Voulez vous essayer de nouveau?</p>";
                    }
                    else
                    {
                        ligne4[4].disabled = true;
                        ligne5[0].disabled = false;
                        ligne5[0].focus();
                    }
                }

                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne4[4].value == charAtrouv[i] && ligne4[4].value != charAtrouv[4] && ligne4[4].value != ligne4[0].value && ligne4[4].value != ligne4[1].value && ligne4[4].value != ligne4[2].value && ligne4[4].value != ligne4[3].value)
                        {
                            ligne4[4].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne4[4].disabled = true;
                            ligne5[0].disabled = false;
                            ligne5[0].focus();
                        }
                        else
                        {
                            ligne4[4].disabled = true;
                            ligne5[0].disabled = false;
                            ligne5[0].focus();
                        }
                    }
                }     
                
            }
            essai ++;
        }
        ligne5[0].addEventListener("keypress" , check21);
        function check21(event)
        {
            tabRep = [];
            if(event.key === "Enter")
            {
                tabRep.push(ligne5[0].value);
                if (ligne5[0].value == charAtrouv[0])
                {
                    ligne5[0].style.backgroundColor = "red";
                    ligne5[0].disabled = true;
                    ligne5[1].disabled = false;
                    ligne5[1].focus();
                }
                else
                {
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne5[0].value == charAtrouv[i] && ligne5[0].value != charAtrouv[0])
                        {
                            ligne5[0].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne5[0].disabled = true;
                            ligne5[1].disabled = false;
                            ligne5[1].focus();
                        }
                        else
                        {
                            ligne5[0].disabled = true;
                            ligne5[1].disabled = false;
                            ligne5[1].focus();
                        }
                    }
                }   
            }
        }
        ligne5[1].addEventListener("keypress" , check22);
        function check22(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne5[1].value);
                if (ligne5[1].value == charAtrouv[1])
                {
                    ligne5[1].style.backgroundColor = "red";
                    ligne5[1].disabled = true;
                    ligne5[2].disabled = false;
                    ligne5[2].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne5[1].value == charAtrouv[i] && ligne5[1].value != charAtrouv[1] && ligne5[1].value != ligne5[0].value)
                        {
                            ligne5[1].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne5[1].disabled = true;
                            ligne5[2].disabled = false;
                            ligne5[2].focus();
                        }
                        else
                        {
                            ligne5[1].disabled = true;
                            ligne5[2].disabled = false;
                            ligne5[2].focus();
                        }
                    }
                    
            }
        }
        ligne5[2].addEventListener("keypress" , check23);
        function check23(event)
        {
            tabRep.push(ligne5[2].value);
            if(event.key === "Enter")
            {
                if (ligne5[2].value == charAtrouv[2])
                {
                    ligne5[2].style.backgroundColor = "red";
                    ligne5[2].disabled = true;
                    ligne5[3].disabled = false;
                    ligne5[3].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne5[2].value == charAtrouv[i] && ligne5[2].value != charAtrouv[2] && ligne5[2].value != ligne5[0].value && ligne5[2].value != ligne5[1].value)
                        {
                            ligne5[2].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne5[2].disabled = true;
                            ligne5[3].disabled = false;
                            ligne5[3].focus();
                        }
                        else
                        {
                            ligne5[2].disabled = true;
                            ligne5[3].disabled = false;
                            ligne5[3].focus();
                        }
                    }
                    
            }
        }
        ligne5[3].addEventListener("keypress" , check24);
        function check24(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne5[3].value);
                if (ligne5[3].value == charAtrouv[3])
                {
                    ligne5[3].style.backgroundColor = "red";
                    ligne5[3].disabled = true;
                    ligne5[4].disabled = false;
                    ligne5[4].focus();
                }
                else
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne5[3].value == charAtrouv[i] && ligne5[3].value != charAtrouv[3] && ligne5[3].value != ligne5[0].value && ligne5[3].value != ligne5[1].value && ligne5[3].value != ligne5[2].value)
                        {
                            ligne5[3].style.backgroundColor = "rgb(241, 187, 10)";
                            ligne5[3].disabled = true;
                            ligne5[4].disabled = false;
                            ligne5[4].focus();
                        }
                        else
                        {
                            ligne5[3].disabled = true;
                            ligne5[4].disabled = false;
                            ligne5[4].focus();
                        }
                    }
                    
            }
        }
        ligne5[4].addEventListener("keypress" , check25);
        function check25(event)
        {
            if(event.key === "Enter")
            {
                tabRep.push(ligne5[4].value);
                if (ligne5[4].value == charAtrouv[4])
                {
                    ligne5[4].style.backgroundColor = "red";
                    var testRep = tabRep.join("");
                    var compRep = charAtrouv.join("");
                    console.log(testRep);
                    if(testRep == compRep)
                    {
                        zoneJeu.style.display = "none";
                        zoneWin.style.display = "block";
                        retry1.style.display = "block";
                        zoneWin.innerHTML = "<p>Superbe! Le mot était effectivement: "+ compRep +"</p><p>Voulez vous essayer de nouveau?</p>";
                    }
                    else
                    {
                        var compRep = charAtrouv.join("");
                        zoneJeu.style.display = "none"; 
                        zoneLose.style.display = "block"; 
                        retry2.style.display = "block";
                        zoneLose.innerHTML = "<p>Dommage! Le mot était : "+ compRep +"<br>Voulez vous essayer de nouveau?</p>";
                    }
                }
                else
                {
                var compRep = charAtrouv.join("");
                    for(i = 0 ; i < 5 ; i ++)
                    {
                        if (ligne5[4].value == charAtrouv[i] && ligne5[4].value != charAtrouv[4] && ligne5[4].value != ligne5[0].value && ligne5[4].value != ligne5[1].value && ligne5[4].value != ligne5[2].value && ligne5[4].value != ligne5[3].value)
                        {
                            ligne5[4].style.backgroundColor = "rgb(241, 187, 10)";
                        }
                        else
                        {
                            zoneJeu.style.display = "none"; 
                            zoneLose.style.display = "block"; 
                            retry2.style.display = "block";
                            zoneLose.innerHTML = "<p>Dommage! Le mot était : "+ compRep +"</p><p>Voulez vous essayer de nouveau?</p>";

                        }
                    }
                }      
            }
            essai ++;
        }
    
}   







