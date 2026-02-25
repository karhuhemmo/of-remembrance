let x = 400;
let y = 400;
let z = 250;
let r, g, b;

//rgbvari = [bgr1, bgr2, bgr3];
//^älä välitä tosta, tässä taustat.
function preload() {
let img1  = loadImage('images/details/tausta/tausta1.png');
let img2  = loadImage('images/details/tausta/tausta2.png');
let img3  = loadImage('images/details/tausta/tausta3.png');
let img4  = loadImage('images/details/tausta/tausta4.png');
let img5  = loadImage('images/details/tausta/tausta5.png');
let img6  = loadImage('images/details/tausta/tausta6.png');
let img7  = loadImage('images/details/tausta/tausta7.png');
let img8  = loadImage('images/details/tausta/tausta8.png');
let img9  = loadImage('images/details/tausta/tausta9.png');
let img10 = loadImage('images/details/tausta/tausta10.png');
let img11 = loadImage('images/details/tausta/tausta11.png');
let img12 = loadImage('images/details/tausta/tausta12.png');
let img13 = loadImage('images/details/tausta/tausta13.png');
let img14 = loadImage('images/details/tausta/tausta14.png');
let img15 = loadImage('images/details/tausta/tausta15.png');
let img16 = loadImage('images/details/tausta/tausta16.png');
let img17 = loadImage('images/details/tausta/tausta17.png');
let img18 = loadImage('images/details/tausta/tausta18.png');
let img19 = loadImage('images/details/tausta/tausta19.png');
let img20 = loadImage('images/details/tausta/tausta20.png');
let img21 = loadImage('images/details/tausta/tausta21.png');
let img22 = loadImage('images/details/tausta/tausta22.png');
let img23 = loadImage('images/details/tausta/tausta23.png');
let img24 = loadImage('images/details/tausta/tausta24.png');
let img25 = loadImage('images/details/tausta/tausta25.png');
let img26 = loadImage('images/details/tausta/tausta26.png');
let img27 = loadImage('images/details/tausta/tausta27.png');
let img28 = loadImage('images/details/tausta/tausta28.png');
let img29 = loadImage('images/details/tausta/tausta29.png');
let img30 = loadImage('images/details/tausta/tausta30.png');
let img31 = loadImage('images/details/tausta/tausta31.png');
let img32 = loadImage('images/details/tausta/tausta32.png');
let img33 = loadImage('images/details/tausta/tausta33.png');
let img34 = loadImage('images/details/tausta/tausta34.png');
let img35 = loadImage('images/details/tausta/tausta35.png');
let img36 = loadImage('images/details/tausta/tausta36.png');
let img37 = loadImage('images/details/tausta/tausta37.png');
let img38 = loadImage('images/details/tausta/tausta38.png');
let img39 = loadImage('images/details/tausta/tausta39.png');
let img40 = loadImage('images/details/tausta/tausta40.png');
let img41 = loadImage('images/details/tausta/tausta41.png');
let img42 = loadImage('images/details/tausta/tausta42.png');
let img43 = loadImage('images/details/tausta/tausta43.png');
let img44 = loadImage('images/details/tausta/tausta44.png');
let img45 = loadImage('images/details/tausta/tausta45.png');
let img46 = loadImage('images/details/tausta/tausta46.png');
let img47 = loadImage('images/details/tausta/tausta47.png');
let img48 = loadImage('images/details/tausta/tausta48.png');
let img49 = loadImage('images/details/tausta/tausta49.png');
let img50 = loadImage('images/details/tausta/tausta50.png');
let img51 = loadImage('images/details/tausta/tausta51.png');
let img52 = loadImage('images/details/tausta/tausta52.png');
let img53 = loadImage('images/details/tausta/tausta53.png');
let img54 = loadImage('images/details/tausta/tausta54.png');
let img55 = loadImage('images/details/tausta/tausta55.png');
let img56 = loadImage('images/details/tausta/tausta56.png');
let img57 = loadImage('images/details/tausta/tausta57.png');
let img58 = loadImage('images/details/tausta/tausta58.png');
let img59 = loadImage('images/details/tausta/tausta59.png');
let img60 = loadImage('images/details/tausta/tausta60.png');
let img61 = loadImage('images/details/tausta/tausta61.png');
let img62 = loadImage('images/details/tausta/tausta62.png');
let img63 = loadImage('images/details/tausta/tausta63.png');
let img64 = loadImage('images/details/tausta/tausta64.png');
let img65 = loadImage('images/details/tausta/tausta65.png');
let img66 = loadImage('images/details/tausta/tausta66.png');
let img67 = loadImage('images/details/tausta/tausta67.png');
let img68 = loadImage('images/details/tausta/tausta68.png');
let img69 = loadImage('images/details/tausta/tausta69.png');
let img70 = loadImage('images/details/tausta/tausta70.png');
let img71 = loadImage('images/details/tausta/tausta71.png');
let img72 = loadImage('images/details/tausta/tausta72.png');
let img73 = loadImage('images/details/tausta/tausta73.png');
let img74 = loadImage('images/details/tausta/tausta74.png');
let img75 = loadImage('images/details/tausta/tausta75.png');
let img76 = loadImage('images/details/tausta/tausta76.png');
let img77 = loadImage('images/details/tausta/tausta77.png');
let img78 = loadImage('images/details/tausta/tausta78.png');
let img79 = loadImage('images/details/tausta/tausta79.png');
let img80 = loadImage('images/details/tausta/tausta80.png');
let img81 = loadImage('images/details/tausta/tausta81.png');
let img82 = loadImage('images/details/tausta/tausta82.png');
let img83 = loadImage('images/details/tausta/tausta83.png');
let img84 = loadImage('images/details/tausta/tausta84.png');
let img85 = loadImage('images/details/tausta/tausta85.png');
let img86 = loadImage('images/details/tausta/tausta86.png');
let img87 = loadImage('images/details/tausta/tausta87.png');
let img88 = loadImage('images/details/tausta/tausta88.png');
let img89 = loadImage('images/details/tausta/tausta89.png');
let img90 = loadImage('images/details/tausta/tausta90.png');
let img91 = loadImage('images/details/tausta/tausta91.png');
let img92 = loadImage('images/details/tausta/tausta92.png');
let img93 = loadImage('images/details/tausta/tausta93.png');
let img94 = loadImage('images/details/tausta/tausta94.png');
let img95 = loadImage('images/details/tausta/tausta95.png');
let img96 = loadImage('images/details/tausta/tausta96.png');
let img97 = loadImage('images/details/tausta/tausta97.png');
let img98 = loadImage('images/details/tausta/tausta98.png');
let img99 = loadImage('images/details/tausta/tausta99.png');
let img100= loadImage('images/details/tausta/tausta100.png');
let img101= loadImage('images/details/tausta/tausta101.png');
let img102= loadImage('images/details/tausta/tausta102.png');
let img103= loadImage('images/details/tausta/tausta103.png');
let img104= loadImage('images/details/tausta/tausta104.png');
let img105= loadImage('images/details/tausta/tausta105.png');
let img106= loadImage('images/details/tausta/tausta106.png');
let img107= loadImage('images/details/tausta/tausta107.png');
let img108= loadImage('images/details/tausta/tausta108.png');
let img109= loadImage('images/details/tausta/tausta109.png');
let img110= loadImage('images/details/tausta/tausta110.png');
let img111= loadImage('images/details/tausta/tausta111.png');
let img112= loadImage('images/details/tausta/tausta112.png');
let img113= loadImage('images/details/tausta/tausta113.png');
let img114= loadImage('images/details/tausta/tausta114.png');
let img115= loadImage('images/details/tausta/tausta115.png');
let img116= loadImage('images/details/tausta/tausta116.png');
let img117= loadImage('images/details/tausta/tausta117.png');
let img118= loadImage('images/details/tausta/tausta118.png');
let img119= loadImage('images/details/tausta/tausta119.png');
let img120= loadImage('images/details/tausta/tausta120.png');
let img121= loadImage('images/details/tausta/tausta121.png');
let img122= loadImage('images/details/tausta/tausta122.png');
let img123= loadImage('images/details/tausta/tausta123.png');
let img124= loadImage('images/details/tausta/tausta124.png');
let img125= loadImage('images/details/tausta/tausta125.png');
let img126= loadImage('images/details/tausta/tausta126.png');
let img127= loadImage('images/details/tausta/tausta127.png');
let img128= loadImage('images/details/tausta/tausta128.png');
let img129= loadImage('images/details/tausta/tausta129.png');
let img130= loadImage('images/details/tausta/tausta130.png');
let img131= loadImage('images/details/tausta/tausta131.png');
let img132= loadImage('images/details/tausta/tausta132.png');
let img133= loadImage('images/details/tausta/tausta133.png');
let img134= loadImage('images/details/tausta/tausta134.png');
let img135= loadImage('images/details/tausta/tausta135.png');
let img136= loadImage('images/details/tausta/tausta136.png');
let img137= loadImage('images/details/tausta/tausta137.png');
let img138= loadImage('images/details/tausta/tausta138.png');
let img139= loadImage('images/details/tausta/tausta139.png');
let img140= loadImage('images/details/tausta/tausta140.png');
let img141= loadImage('images/details/tausta/tausta141.png');
let img142= loadImage('images/details/tausta/tausta142.png');
let img143= loadImage('images/details/tausta/tausta143.png');
let img144= loadImage('images/details/tausta/tausta144.png');
let img145= loadImage('images/details/tausta/tausta145.png');
let img146= loadImage('images/details/tausta/tausta146.png');
let img147= loadImage('images/details/tausta/tausta147.png');
let img148= loadImage('images/details/tausta/tausta148.png');
let img149= loadImage('images/details/tausta/tausta149.png');
let img150= loadImage('images/details/tausta/tausta150.png');
let img151= loadImage('images/details/tausta/tausta151.png');
let img152= loadImage('images/details/tausta/tausta152.png');
let img153= loadImage('images/details/tausta/tausta153.png');
let img154= loadImage('images/details/tausta/tausta154.png');
let img155= loadImage('images/details/tausta/tausta155.png');
let img156= loadImage('images/details/tausta/tausta156.png');
let img157= loadImage('images/details/tausta/tausta157.png');
let img158= loadImage('images/details/tausta/tausta158.png');
let img159= loadImage('images/details/tausta/tausta159.png');
let img160= loadImage('images/details/tausta/tausta160.png');
//Silmiä ilman filmiä, katseita käänäen, pökäleitä vääntäen.
let simg1  = loadImage('images/details/hemmo/silma1.png');
let simg2  = loadImage('images/details/hemmo/silma2.png');
let simg3  = loadImage('images/details/hemmo/silma3.png');
let simg4  = loadImage('images/details/hemmo/silma4.png');
let simg5  = loadImage('images/details/hemmo/silma5.png');
let simg6  = loadImage('images/details/hemmo/silma6.png');
let simg7  = loadImage('images/details/hemmo/silma7.png');
let simg8  = loadImage('images/details/hemmo/silma8.png');
let simg9  = loadImage('images/details/hemmo/silma9.png');
let simg10 = loadImage('images/details/hemmo/silma10.png');
let simg11 = loadImage('images/details/hemmo/silma11.png');
let simg12 = loadImage('images/details/hemmo/silma12.png');
let simg13 = loadImage('images/details/hemmo/silma13.png');
let simg14 = loadImage('images/details/hemmo/silma14.png');
let simg15 = loadImage('images/details/hemmo/silma15.png');
let simg16 = loadImage('images/details/hemmo/silma16.png');
let simg17 = loadImage('images/details/hemmo/silma17.png');
let simg18 = loadImage('images/details/hemmo/silma18.png');
let simg19 = loadImage('images/details/hemmo/silma19.png');
let simg20 = loadImage('images/details/hemmo/silma20.png');
// Tässä tulee nenät. Varo, ettei sun nenä löydy kohta täältä.
let nimg1  = loadImage('images/details/hemmo/nena1.png');
let nimg2  = loadImage('images/details/hemmo/nena2.png');
let nimg3  = loadImage('images/details/hemmo/nena3.png');
let nimg4  = loadImage('images/details/hemmo/nena4.png');
let nimg5  = loadImage('images/details/hemmo/nena5.png');
let nimg6  = loadImage('images/details/hemmo/nena6.png');
let nimg7  = loadImage('images/details/hemmo/nena7.png');
let nimg8  = loadImage('images/details/hemmo/nena8.png');
let nimg9  = loadImage('images/details/hemmo/nena9.png');
let nimg10 = loadImage('images/details/hemmo/nena10.png');
let nimg11 = loadImage('images/details/hemmo/nena11.png');
//loogisin askel, suu, ei mikään muu.
let suimg1  = loadImage('images/details/hemmo/suu1.png');
let suimg2  = loadImage('images/details/hemmo/suu2.png');
let suimg3  = loadImage('images/details/hemmo/suu3.png');
let suimg4  = loadImage('images/details/hemmo/suu4.png');
let suimg5  = loadImage('images/details/hemmo/suu5.png');
let suimg6  = loadImage('images/details/hemmo/suu6.png');
let suimg7  = loadImage('images/details/hemmo/suu7.png');
let suimg8  = loadImage('images/details/hemmo/suu8.png');
let suimg9  = loadImage('images/details/hemmo/suu9.png');
let suimg10 = loadImage('images/details/hemmo/suu10.png');
let suimg11 = loadImage('images/details/hemmo/suu11.png');
//Tukat
let timg1  = loadImage('images/details/hemmo/tukka1.png');
let timg2  = loadImage('images/details/hemmo/tukka2.png');
let timg3  = loadImage('images/details/hemmo/tukka3.png');
let timg4  = loadImage('images/details/hemmo/tukka4.png');
let timg5  = loadImage('images/details/hemmo/tukka5.png');
let timg6  = loadImage('images/details/hemmo/tukka6.png');
let timg7  = loadImage('images/details/hemmo/tukka7.png');
let timg8  = loadImage('images/details/hemmo/tukka8.png');
let timg9  = loadImage('images/details/hemmo/tukka9.png');
let timg10 = loadImage('images/details/hemmo/tukka10.png');
let timg11 = loadImage('images/details/hemmo/tukka11.png');
let timg12 = loadImage('images/details/hemmo/tukka12.png');
let timg13 = loadImage('images/details/hemmo/tukka13.png');
let timg14 = loadImage('images/details/hemmo/tukka14.png');
let timg15 = loadImage('images/details/hemmo/tukka15.png');
let timg16 = loadImage('images/details/hemmo/tukka16.png');

//korvat

let kimg1  = loadImage('images/details/hemmo/korva1.png');
let kimg2  = loadImage('images/details/hemmo/korva2.png');
let kimg3  = loadImage('images/details/hemmo/korva3.png');
let kimg4  = loadImage('images/details/hemmo/korva4.png');
let kimg5  = loadImage('images/details/hemmo/korva5.png');

//esi-iho
let iimg1  = loadImage('images/details/hemmo/ihoa1.png');
let iimg2  = loadImage('images/details/hemmo/ihoa2.png');
let iimg3  = loadImage('images/details/hemmo/ihoa3.png');
let iimg4  = loadImage('images/details/hemmo/ihoa4.png');
let iimg5  = loadImage('images/details/hemmo/ihoa5.png');
let iimg9  = loadImage('images/details/hemmo/ihoa9.png');
let iimg10 = loadImage('images/details/hemmo/ihoa10.png');
let iimg18 = loadImage('images/details/hemmo/ihoa18.png');
let iimg19 = loadImage('images/details/hemmo/ihoa19.png');
let iimg20 = loadImage('images/details/hemmo/ihoa20.png');
let iimg21 = loadImage('images/details/hemmo/ihoa21.png');
let iimg22 = loadImage('images/details/hemmo/ihoa22.png');
let iimg25 = loadImage('images/details/hemmo/ihoa25.png');
let iimg26 = loadImage('images/details/hemmo/ihoa26.png');
let iimg27 = loadImage('images/details/hemmo/ihoa27.png');
let iimg29 = loadImage('images/details/hemmo/ihoa29.png');
let iimg30 = loadImage('images/details/hemmo/sydan1.png');

//esilimakulma
let kuimg1 = loadImage('images/details/kulmat/kulma1.png');
let kuimg2 = loadImage('images/details/kulmat/kulma2.png');
let kuimg3 = loadImage('images/details/kulmat/kulma3.png');
let kuimg4 = loadImage('images/details/kulmat/kulma4.png');
let kuimg5  = loadImage('images/details/kulmat/kulma5.png');
let kuimg6  = loadImage('images/details/kulmat/kulma6.png');
let kuimg7  = loadImage('images/details/kulmat/kulma7.png');
let kuimg8  = loadImage('images/details/kulmat/kulma8.png');
let kuimg9  = loadImage('images/details/kulmat/kulma9.png');
let kuimg10 = loadImage('images/details/kulmat/kulma10.png');
let kuimg11 = loadImage('images/details/kulmat/kulma11.png');
let kuimg12 = loadImage('images/details/kulmat/kulma12.png');
let kuimg13 = loadImage('images/details/kulmat/kulma13.png');
let kuimg14 = loadImage('images/details/kulmat/kulma14.png');
let kuimg15 = loadImage('images/details/kulmat/kulma15.png');
let kuimg16 = loadImage('images/details/kulmat/kulma16.png');



taustat = [img1, img2  ,img3  ,img4  ,img5  ,img6  ,img7  ,img8  ,img9  ,img10 ,
        img11 ,img12 ,img13 ,img14 ,img15 ,img16 ,img17 ,img18 ,img19 ,img20 ,
        img21 ,img22 ,img23 ,img24 ,img25 ,img26 ,img27 ,img28 ,img29 ,img30 ,
        img31 ,img32 ,img33 ,img34 ,img35 ,img36 ,img37 ,img38 ,img39 ,img40 ,
        img41 ,img42 ,img43 ,img44 ,img45 ,img46 ,img47 ,img48 ,img49 ,img50 ,
        img51 ,img52 ,img53 ,img54 ,img55 ,img56 ,img57 ,img58 ,img59 ,img60 ,
        img61 ,img62 ,img63 ,img64 ,img65 ,img66 ,img67 ,img68 ,img69 ,img70 ,
        img71 ,img72 ,img73 ,img74 ,img75 ,img76 ,img77 ,img78 ,img79 ,img80 ,
        img81 ,img82 ,img83 ,img84 ,img85 ,img86 ,img87 ,img88 ,img89 ,img90 ,
        img91 ,img92 ,img93 ,img94 ,img95 ,img96 ,img97 ,img98 ,img99 ,img100,
        img101,img102,img103,img104,img105,img106,img107,img108,img109,img110,
        img111,img112,img113,img114,img115,img116,img117,img118,img119,img120,
        img121,img122,img123,img124,img125,img126,img127,img128,img129,img130,
        img131,img132,img133,img134,img135,img136,img137,img138,img139,img140,
        img141,img142,img143,img144,img145,img146,img147,img148,img149,img150,
        img151,img152,img153,img154,img155,img156,img157,img158,img159,img160];

silmat = [simg1,simg2,simg3,simg4,simg5,simg6,simg7,simg8,simg9,simg10,
        simg11,simg12,simg13,simg14,simg15,simg16,simg17,simg18,simg19,simg20]

nenat = [nimg1,nimg2,nimg3,nimg4,nimg5,nimg6,nimg7,nimg8,nimg9,nimg10,
        nimg11]

suut = [suimg1,suimg2,suimg3,suimg4,suimg5,suimg6,suimg7,suimg8,suimg9,suimg10,
        suimg11]

tukkap = [timg3, timg5, timg12, timg13, timg16]

tukkas = [timg1,timg2,timg4,timg6,timg7,timg8,timg9,timg10,timg11,timg14,timg15]

korvat = [kimg1, kimg2, kimg3, kimg4, kimg5]

ihot = [iimg1 ,iimg2 ,iimg3 ,iimg4 ,iimg5 ,iimg9 ,iimg10,iimg18,iimg19,iimg20,
        iimg21,iimg22,iimg26,iimg27,iimg29,iimg30]

kulmat = [kuimg1,kuimg2,kuimg3,kuimg4,kuimg5,kuimg6,kuimg7,kuimg8,kuimg9,kuimg10,
        kuimg11,kuimg12,kuimg13,kuimg14,kuimg15,kuimg16]

}

function setup() {
        
    colorMode        
    createCanvas(800, 800);
    
    randomizeColors();
    
}

function randomizeColors(){
        r = random(0,100);
        g = random(0,100);
        b = random(0,100);
        
}

function draw() {

        background(r, g, b);
         


x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);



//tähän pieni hajurako



let randoImg = random(taustat);

        image(randoImg, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg1 = random(taustat); 

        image(randoImg1, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg2 = random(taustat); 

        image(randoImg2, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg3 = random(taustat); 

        image(randoImg3, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg4 = random(taustat); 

        image(randoImg4, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg5 = random(taustat); 

        image(randoImg5, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg6 = random(taustat); 

        image(randoImg6, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg7 = random(taustat); 

        image(randoImg7, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg8 = random(taustat); 

        image(randoImg8, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg9 = random(taustat); 

        image(randoImg9, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg10 = random(taustat); 

        image(randoImg10, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg11 = random(taustat);

        image(randoImg11, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg12 = random(taustat); 

        image(randoImg12, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg13 = random(taustat); 

        image(randoImg13, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg14 = random(taustat); 

        image(randoImg14, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg15 = random(taustat); 

        image(randoImg15, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg16 = random(taustat); 

        image(randoImg16, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg17 = random(taustat); 

        image(randoImg17, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg18 = random(taustat); 

        image(randoImg18, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg19 = random(taustat); 

        image(randoImg19, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg20 = random(taustat); 

        image(randoImg20, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg21 = random(taustat); 

        image(randoImg21, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg22 = random(taustat); 

        image(randoImg22, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg23 = random(taustat); 

        image(randoImg23, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg24 = random(taustat); 

        image(randoImg24, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg25 = random(taustat); 

        image(randoImg25, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg26 = random(taustat); 

        image(randoImg26, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg27 = random(taustat); 

        image(randoImg27, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg28 = random(taustat); 

        image(randoImg28, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg29 = random(taustat); 

        image(randoImg29, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg30 = random(taustat); 

        image(randoImg30, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg31 = random(taustat);

        image(randoImg31, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg32 = random(taustat); 

        image(randoImg32, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg33 = random(taustat); 

        image(randoImg33, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg34 = random(taustat); 

        image(randoImg34, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg35 = random(taustat); 

        image(randoImg35, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg36 = random(taustat); 

        image(randoImg36, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg37 = random(taustat); 

        image(randoImg37, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg38 = random(taustat); 

        image(randoImg38, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg39 = random(taustat); 

        image(randoImg39, x, y);

x += random(-250, 250);
y += random(-250, 250);
z += random(-50000, 50000);   
x = constrain(x,0,500);
y = constrain(y,0,500);

let randoImg40 = random(taustat); 

        image(randoImg40, x, y);

        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        
        let randoImg41 = random(taustat);
        
                image(randoImg41, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg42 = random(taustat); 
        
                image(randoImg42, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg43 = random(taustat); 
        
                image(randoImg43, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg44 = random(taustat); 
        
                image(randoImg44, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg45 = random(taustat); 
        
                image(randoImg45, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg46 = random(taustat); 
        
                image(randoImg46, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg47 = random(taustat); 
        
                image(randoImg47, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg48 = random(taustat); 
        
                image(randoImg48, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg49 = random(taustat); 
        
                image(randoImg49, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg50 = random(taustat); 
        
                image(randoImg50, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg51 = random(taustat); 
        
                image(randoImg51, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg52 = random(taustat);
        
                image(randoImg52, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg53 = random(taustat); 
        
                image(randoImg53, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg54 = random(taustat); 
        
                image(randoImg54, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg55 = random(taustat); 
        
                image(randoImg55, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg56 = random(taustat); 
        
                image(randoImg56, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg57 = random(taustat); 
        
                image(randoImg57, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg58 = random(taustat); 
        
                image(randoImg58, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg59 = random(taustat); 
        
                image(randoImg59, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg60 = random(taustat); 
        
                image(randoImg60, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg61 = random(taustat); 
        
                image(randoImg61, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg62 = random(taustat); 
        
                image(randoImg62, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg63 = random(taustat); 
        
                image(randoImg63, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg64 = random(taustat); 
        
                image(randoImg64, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg65 = random(taustat); 
        
                image(randoImg65, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg66 = random(taustat); 
        
                image(randoImg66, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg67 = random(taustat); 
        
                image(randoImg67, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg68 = random(taustat); 
        
                image(randoImg68, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg69 = random(taustat); 
        
                image(randoImg69, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg70 = random(taustat); 
        
                image(randoImg70, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg71 = random(taustat); 
        
                image(randoImg71, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg72 = random(taustat);
        
                image(randoImg72, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg73 = random(taustat); 
        
                image(randoImg73, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg74 = random(taustat); 
        
                image(randoImg74, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg75 = random(taustat); 
        
                image(randoImg75, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg76 = random(taustat); 
        
                image(randoImg76, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg77 = random(taustat); 
        
                image(randoImg77, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg78 = random(taustat); 
        
                image(randoImg78, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg79 = random(taustat); 
        
                image(randoImg79, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg80 = random(taustat); 
        
                image(randoImg80, x, y);
        
        x += random(-250, 250);
        y += random(-250, 250);
        z += random(-50000, 50000);   
        x = constrain(x,0,500);
        y = constrain(y,0,500);
        
        let randoImg81 = random(taustat); 
        
                image(randoImg81, x, y);

                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                
                let randoImg82 = random(taustat);
                
                        image(randoImg82, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg83 = random(taustat); 
                
                        image(randoImg83, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg84 = random(taustat); 
                
                        image(randoImg84, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg85 = random(taustat); 
                
                        image(randoImg85, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg86 = random(taustat); 
                
                        image(randoImg86, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg87 = random(taustat); 
                
                        image(randoImg87, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg88 = random(taustat); 
                
                        image(randoImg88, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg89 = random(taustat); 
                
                        image(randoImg89, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg90 = random(taustat); 
                
                        image(randoImg90, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg91 = random(taustat); 
                
                        image(randoImg91, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg92 = random(taustat); 
                
                        image(randoImg92, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg93 = random(taustat);
                
                        image(randoImg93, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg94 = random(taustat); 
                
                        image(randoImg94, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg95 = random(taustat); 
                
                        image(randoImg95, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg96 = random(taustat); 
                
                        image(randoImg96, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg97 = random(taustat); 
                
                        image(randoImg97, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg98 = random(taustat); 
                
                        image(randoImg98, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg99 = random(taustat); 
                
                        image(randoImg99, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg100 = random(taustat); 
                
                        image(randoImg100, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg101 = random(taustat); 
                
                        image(randoImg101, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg102 = random(taustat); 
                
                        image(randoImg102, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg103 = random(taustat); 
                
                        image(randoImg103, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg104 = random(taustat); 
                
                        image(randoImg104, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg105 = random(taustat); 
                
                        image(randoImg105, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg106 = random(taustat); 
                
                        image(randoImg106, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg107 = random(taustat); 
                
                        image(randoImg107, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg108 = random(taustat); 
                
                        image(randoImg108, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg109 = random(taustat); 
                
                        image(randoImg109, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg110 = random(taustat); 
                
                        image(randoImg110, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg111 = random(taustat); 
                
                        image(randoImg111, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
                let randoImg112 = random(taustat); 
                
                        image(randoImg112, x, y);
                
                x += random(-250, 250);
                y += random(-250, 250);
                z += random(-50000, 50000);   
                x = constrain(x,0,500);
                y = constrain(y,0,500);
                
               let randoImg113 = random(taustat);
               
                       image(randoImg113, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg114 = random(taustat); 
               
                       image(randoImg114, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg115 = random(taustat); 
               
                       image(randoImg115, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg116 = random(taustat); 
               
                       image(randoImg116, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg117 = random(taustat); 
               
                       image(randoImg117, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg118 = random(taustat); 
               
                       image(randoImg118, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg119 = random(taustat); 
               
                       image(randoImg119, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg120 = random(taustat); 
               
                       image(randoImg120, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg121 = random(taustat); 
               
                       image(randoImg121, x, y);
               
               x += random(-250, 250);
               y += random(-250, 250);
               z += random(-50000, 50000);   
               x = constrain(x,0,500);
               y = constrain(y,0,500);
               
               let randoImg122 = random(taustat); 
               
                       image(randoImg122, x, y);

                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       
                       let randoImg123 = random(taustat);
                       
                               image(randoImg123, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg124 = random(taustat); 
                       
                               image(randoImg124, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg125 = random(taustat); 
                       
                               image(randoImg125, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg126 = random(taustat); 
                       
                               image(randoImg126, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg127 = random(taustat); 
                       
                               image(randoImg127, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg128 = random(taustat); 
                       
                               image(randoImg128, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg129 = random(taustat); 
                       
                               image(randoImg129, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg130 = random(taustat); 
                       
                               image(randoImg130, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg131 = random(taustat); 
                       
                               image(randoImg131, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg132 = random(taustat); 
                       
                               image(randoImg132, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg133 = random(taustat); 
                       
                               image(randoImg133, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg134 = random(taustat);
                       
                               image(randoImg134, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg135 = random(taustat); 
                       
                               image(randoImg135, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg136 = random(taustat); 
                       
                               image(randoImg136, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg137 = random(taustat); 
                       
                               image(randoImg137, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg138 = random(taustat); 
                       
                               image(randoImg138, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg139 = random(taustat); 
                       
                               image(randoImg139, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg140 = random(taustat); 
                       
                               image(randoImg140, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg141 = random(taustat); 
                       
                               image(randoImg141, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg142 = random(taustat); 
                       
                               image(randoImg142, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg143 = random(taustat); 
                       
                               image(randoImg143, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg144 = random(taustat); 
                       
                               image(randoImg144, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg145 = random(taustat); 
                       
                               image(randoImg145, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg146 = random(taustat); 
                       
                               image(randoImg146, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg147 = random(taustat); 
                       
                               image(randoImg147, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg148 = random(taustat); 
                       
                               image(randoImg148, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg149 = random(taustat); 
                       
                               image(randoImg149, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg150 = random(taustat); 
                       
                               image(randoImg150, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg151 = random(taustat); 
                       
                               image(randoImg151, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg152 = random(taustat); 
                       
                               image(randoImg152, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg153 = random(taustat); 
                       
                               image(randoImg153, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg154 = random(taustat);
                       
                               image(randoImg154, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg155 = random(taustat); 
                       
                               image(randoImg155, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg156 = random(taustat); 
                       
                               image(randoImg156, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg157 = random(taustat); 
                       
                               image(randoImg157, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg158 = random(taustat); 
                       
                               image(randoImg158, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg159 = random(taustat); 
                       
                               image(randoImg159, x, y);
                       
                       x += random(-250, 250);
                       y += random(-250, 250);
                       z += random(-50000, 50000);   
                       x = constrain(x,0,500);
                       y = constrain(y,0,500);
                       
                       let randoImg160 = random(taustat); 
                       
                               image(randoImg160, x, y);
                        
                       

        
//        let x1 = random(70,70)
//        let y1 = random(300,300)
//
//
//        let silmaPos1 = random(silmat)
//        let silmaPos2 = random(silmat)
//        let nenaPos1 = random(nenat)
//        let suuPos1 = random(suut)
//        let tukkap1 = random(tukkap)
//        let tukkas1 = random(tukkas)
//        let tukkas2 = random(tukkas)
//        let korvatPos1 = random(korvat)
//        let korvatPos2 = random(korvat)
//        let ihotPos1 = random(ihot)
//        let ihotPos2 = random(ihot)
//        let ihotPos3 = random(ihot)
//        let ihotPos4 = random(ihot)
//        let ihotPos5 = random(ihot)
//        let ihotPos6 = random(ihot)
//        let ihotPos7 = random(ihot)
//        let ihotPos8 = random(ihot)
//        let ihotPos9 = random(ihot)
//        let ihotPos10 = random(ihot)
//        let ihotPos11 = random(ihot)
//        let ihotPos12 = random(ihot)
//        let ihotPos13 = random(ihot)
//        let ihotPos14= random(ihot)
//        let ihotPos15= random(ihot)
//        let ihotPos16= random(ihot)
//
//        let kulmaPos1= random(kulmat)
//        let kulmaPos2= random(kulmat)
//        
//        image(ihotPos1, x1-30,y1-40)
//        image(ihotPos2, x1+30,y1-40)
//        image(ihotPos3, x1+90,y1-40)
//        image(ihotPos4, x1+100,y1-40)
//        image(ihotPos5, x1-30,y1+10)
//        image(ihotPos6, x1+30,y1+10)
//        image(ihotPos7, x1+90,y1+10)
//        image(ihotPos8, x1+100,y1+10)
//        image(ihotPos9, x1-30,y1+70)
//        image(ihotPos10, x1+30,y1+70)
//        image(ihotPos11, x1+90,y1+70)
//        image(ihotPos12, x1+100,y1+50)
//        image(ihotPos13, x1-30,y1+150)
//        image(ihotPos14, x1+30,y1+150)
//        image(ihotPos15, x1+90,y1+150)
//        image(ihotPos16, x1+120,y1+150)
//        
//        imageMode(CENTER)
//        image(tukkap1, x1+75,y1-30)
//        imageMode(CORNER)
//        image(tukkas1, x1-50,y1)
//        image(tukkas2, x1+70,y1)
//
//        imageMode(CORNER)
//        image(korvatPos1,x1-20,y1+30)
//        image(korvatPos2,x1+130,y1+30)
//
//        image(silmaPos1, x1, y1)
//        image(silmaPos2, x1+100, y1)
//        image(nenaPos1, x1+50,y1)
//        imageMode(CENTER)
//        image(suuPos1, x1+75,y1+100)
//
//        imageMode(CORNER)
//        image(kulmaPos1, x1, y1-30)
//        image(kulmaPos2, x1+100, y1-30)

        let x2 = random(0,800)
        let y2 = random(0,800)

        let silmaPos3 = random(silmat)
        let silmaPos4 = random(silmat)
        let nenaPos2 = random(nenat)
        let suuPos2 = random(suut)
        let tukkap2 = random(tukkap)
        let tukkas3 = random(tukkas)
        let tukkas4 = random(tukkas)
        let korvatPos3 = random(korvat)
        let korvatPos4 = random(korvat)
        let ihotPos17 = random(ihot)
        let ihotPos18 = random(ihot)
        let ihotPos19 = random(ihot)
        let ihotPos20 = random(ihot)
        let ihotPos21 = random(ihot)
        let ihotPos22 = random(ihot)
        let ihotPos23 = random(ihot)
        let ihotPos24 = random(ihot)
        let ihotPos25 = random(ihot)
        let ihotPos26 = random(ihot)
        let ihotPos27 = random(ihot)
        let ihotPos28 = random(ihot)
        let ihotPos29 = random(ihot)
        let ihotPos30= random(ihot)
        let ihotPos31= random(ihot)
        let ihotPos32= random(ihot)

        let kulmaPos3= random(kulmat)
        let kulmaPos4= random(kulmat)


        image(ihotPos17, x2-30,y2-40)
        image(ihotPos18, x2+30,y2-40)
        image(ihotPos19, x2+90,y2-40)
        image(ihotPos20, x2+100,y2-40)
        image(ihotPos21, x2-30,y2+10)
        image(ihotPos22, x2+30,y2+10)
        image(ihotPos23, x2+90,y2+10)
        image(ihotPos24, x2+100,y2+10)
        image(ihotPos25, x2-30,y2+70)
        image(ihotPos26, x2+30,y2+70)
        image(ihotPos27, x2+90,y2+70)
        image(ihotPos28, x2+100,y2+50)
        image(ihotPos29, x2-30,y2+150)
        image(ihotPos30, x2+30,y2+150)
        image(ihotPos31, x2+90,y2+150)
        image(ihotPos32, x2+120,y2+150)
        
        imageMode(CENTER)
        image(tukkap2, x2+75,y2-30)
        imageMode(CORNER)
        image(tukkas3, x2-50,y2)
        image(tukkas4, x2+70,y2)

        imageMode(CORNER)
        image(korvatPos3,x2-20,y2+30)
        image(korvatPos4,x2+130,y2+30)

        image(silmaPos3, x2, y2)
        image(silmaPos4, x2+100, y2)
        image(nenaPos2, x2+50,y2)
        imageMode(CENTER)
        image(suuPos2, x2+75,y2+100)

        imageMode(CORNER)
        image(kulmaPos3, x2, y2-30)
        image(kulmaPos4, x2+100, y2-30)

        let x3 = random(0,800)
        let y3 = random(700,800)

        let silmaPos5 = random(silmat)
        let silmaPos6 = random(silmat)
        let nenaPos3 = random(nenat)
        let suuPos3 = random(suut)
        let tukkap3 = random(tukkap)
        let tukkas5 = random(tukkas)
        let tukkas6 = random(tukkas)
        let korvatPos5 = random(korvat)
        let korvatPos6 = random(korvat)
        let ihotPos33 = random(ihot)
        let ihotPos34 = random(ihot)
        let ihotPos35 = random(ihot)
        let ihotPos36 = random(ihot)
        let ihotPos37 = random(ihot)
        let ihotPos38 = random(ihot)
        let ihotPos39 = random(ihot)
        let ihotPos40 = random(ihot)
        let ihotPos41 = random(ihot)
        let ihotPos42 = random(ihot)
        let ihotPos43 = random(ihot)
        let ihotPos44 = random(ihot)
        let ihotPos45 = random(ihot)
        let ihotPos46= random(ihot)
        let ihotPos47= random(ihot)
        let ihotPos48= random(ihot)

        let kulmaPos5= random(kulmat)
        let kulmaPos6= random(kulmat)


        image(ihotPos33, x3-30,y3-40)
        image(ihotPos34, x3+30,y3-40)
        image(ihotPos35, x3+90,y3-40)
        image(ihotPos36, x3+100,y3-40)
        image(ihotPos37, x3-30,y3+10)
        image(ihotPos38, x3+30,y3+10)
        image(ihotPos39, x3+90,y3+10)
        image(ihotPos40, x3+100,y3+10)
        image(ihotPos41, x3-30,y3+70)
        image(ihotPos42, x3+30,y3+70)
        image(ihotPos43, x3+90,y3+70)
        image(ihotPos44, x3+100,y3+50)
        image(ihotPos45, x3-30,y3+150)
        image(ihotPos46, x3+30,y3+150)
        image(ihotPos47, x3+90,y3+150)
        image(ihotPos48, x3+120,y3+150)
        
        imageMode(CENTER)
        image(tukkap3, x3+75,y3-30)
        imageMode(CORNER)
        image(tukkas5, x3-50,y3)
        image(tukkas6, x3+70,y3)

        imageMode(CORNER)
        image(korvatPos5,x3-20,y3+30)
        image(korvatPos6,x3+130,y3+30)

        image(silmaPos5, x3, y3)
        image(silmaPos6, x3+100, y3)
        image(nenaPos3, x3+50,y3)
        imageMode(CENTER)
        image(suuPos3, x3+75,y3+100)

        imageMode(CORNER)
        image(kulmaPos5, x3, y3-30)
        image(kulmaPos6, x3+100, y3-30)



        stroke(2)                
        fill(255)
        text(`${hl.tx.walletAddress}`, 0, 0, width, height * 0.1);

        // Reference the token ID with hl.tx.tokenId
        // tää oli pakko laittaa
        stroke(2)
        fill (255)
        text(`ID #${hl.tx.tokenId}`, 0, height * 0.985, width, height * 0.1);
    
        // Now that we're done drawing all the rectangles, trigger the preview image
        // tää kans
           

noLoop();
hl.token.capturePreview();
}
