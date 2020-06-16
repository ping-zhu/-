var close=document.getElementsByClassName("close")[0]
var header=document.getElementsByTagName("header")[0]




close.onclick =function () {
    header.style.display= "none"
}


var iform=document.getElementById("form")
var poslist=document.getElementsByClassName('pos-list')[0]
var droplist=document.getElementsByClassName('drop-list')[0]

iform.onfocus=function(){
    poslist.style.display="none"
    droplist.style.display="block"
}
iform.onblur=function(){
    poslist.style.display="block"
    droplist.style.display="none"
}



var index=0;
var butleft=document.getElementsByClassName("butleft")[0]
var butright=document.getElementsByClassName("butright")[0]
var lbtul=document.getElementsByClassName("lbt")[0]
var lbtli=lbtul.getElementsByTagName("li")
var dian=document.getElementsByClassName("dian")[0]
var dianspans=dian.getElementsByTagName("span")

butleft.onclick=function(){
  swiper(-1)
}

butright.onclick=function(){
  swiper(1)
}

function swiper(i){
  lbtli[index].style.opacity="0";
  index+=i
    if (index < 0) {
       index = 5
     } 
    if (index > (lbtli.length-1)) {
        index = 0
      } 
      tab(index)
      lbtli[index].style.opacity="1";
}

function tab (i){
  for (var j=0; j<dianspans.length;j++){
    dianspans[j].classList.remove("active")
  }
  dianspans[i].classList.add("active")
}

for (var i =0; i<dianspans.length;i++){
  (function (i) {
    dianspans[i].onclick = function () {
      lbtli[index].style.opacity="0";
      tab (i)
      index = i
      lbtli[i].style.opacity="1";
    }
  }(i))
}
var main =document.getElementsByClassName("main")[0]

timer =setInterval(function(){
  swiper(1)
},2000)

main.onmouseover=function(){
  clearInterval(timer)
}
main.onmouseout=function(){
  clearInterval(timer)
  timer =setInterval(function(){
    swiper(1)
  },2000)
  
}


$.get("index.json",function(data){
  var footerad= document.getElementsByClassName("footer_ad-cen")[0]

  var img= document.createElement("img")
  img.src=data.data[0].img

  footerad.appendChild(img)
})

$("#returntop").click(function(){
  $("html,body").animate({
    scrollTop:"0"
  },400)
})

var boutiqueleft= document.getElementsByClassName("boutique-left")[0]
var boutiqueright= document.getElementsByClassName("boutique-right")[0]
var boutiquelbt= document.getElementsByClassName("boutique-lbt")[0]
var boutiqueindex=0;
boutiqueleft.onclick=function(){
  boutiqueindex--
  if(boutiqueindex<0){
    boutiqueindex=0;
  }else{
    boutiquelbt.style.marginLeft=-1200*boutiqueindex+"px";
  }
}

boutiqueright.onclick=function(){
  boutiqueindex++
  if(boutiqueindex>1){
    boutiqueindex=1;
  }else{
    boutiquelbt.style.marginLeft=-1200*boutiqueindex+"px";
  }
}
var boutiqueleft1= document.getElementsByClassName("boutique-left")[1]
var boutiqueright1= document.getElementsByClassName("boutique-right")[1]
var boutiquelbt1= document.getElementsByClassName("boutique-lbt")[1]
var boutiqueindex1=0;
boutiqueleft1.onclick=function(){
  boutiqueindex1--
  if(boutiqueindex1<0){
    boutiqueindex1=0;
  }else{
    boutiquelbt1.style.marginLeft=-1200*boutiqueindex1+"px";
  }
}

boutiqueright1.onclick=function(){
  boutiqueindex1++
  if(boutiqueindex1>1){
    boutiqueindex1=1;
  }else{
    boutiquelbt1.style.marginLeft=-1200*boutiqueindex1+"px";
  }
}