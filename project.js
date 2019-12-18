//localStorage.clear();
var x=document.getElementById("id1");
var ch=['A']; var item=[];
var ind=[false];
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var butele=document.getElementById("generate");
var show=document.getElementById("eventshow");
var interval;
var myVar = setInterval(myTimer,10000);
localStorage.setItem("unload",JSON.stringify([]));
localStorage.setItem("load",JSON.stringify([]));
localStorage.setItem("Genetate",JSON.stringify([]));
load=[];
unload=[];
Genetate=[];
charc=[];

function myTimer() {
	var nd=0;
	loc=[];
	for (x in localStorage)
	{
		
		if(nd<localStorage.length)
		{
			var tevent = JSON.parse(localStorage[x]);
			for(var i =0;i<tevent.length;i++)
				{
				//	console.log(tevent[i].target);
					 tevent[i].target=tevent[i].target["__proto__"].toString();
				//console.log( tevent[i].target["__proto__"])//=JSON.stringify(tevent[i].target["__proto__"]);
				loc.push(tevent[i]);
				}
		
		}	
		nd++;
	}
	
	
	console.log(loc);
	$.ajax({
    "type": "POST",
    "url": "project.php",
    "data": {"evenetdata":JSON.stringify(loc)},
    "success": function(response){	
	//	console.log(loc);
    	console.log( response );
    	//var personObject = JSON.parse(response);
    	//console.log(personObject);
    	//console.log(typeof personObject);
	}})
	localStorage.clear();
	
localStorage.setItem("unload",JSON.stringify([]));
localStorage.setItem("load",JSON.stringify([]));
localStorage.setItem("Genetate",JSON.stringify([]));
	load=[];
unload=[];
Genetate=[];
//charc=[];

}
window.onload=function(e){

	for(var i =1;i<txt.length;i++)
{
	ind[i]=false;
	ch[i]=txt[i];
}
 item["A"]="Apple"; item["B"]="Banana"; item["C"]="Cat";
 item["D"]="Dog"; item["E"]="Elephant"; item["F"]="Fish"; 
 item["G"]="Giraffe"; item["H"]="Horse"; item["I"]="Ice cream";
 item["J"]="Jam"; item["K"]="Kangaroo"; item["L"]="Lion"; 
 item["M"]="Mouse"; item["N"]="Nest"; item["O"]="Owl"; 
 item["P"]="Penguin"; item["Q"]="Quail";item["R"]="Rabit";
 item["S"]="Spider"; item["T"]="Tigger"; item["U"]="Umbrella"; 
 item["V"]="Violin"; item["W"]="Whale"; 
 item["X"]="Xylophone"; item["Y"]="Yellow"; item["Z"]="Zebra";
	x.focus();

	var evcha=new tevent(e.target,e.type,new Date());
	load=localStorage.getItem("load");
	load=JSON.parse(load);
	load.push(evcha);
	localStorage.setItem("load",JSON.stringify(load));

}
window.onunload=function(e){
	//localStorage['unload']=new Date();
	evcha=new tevent(e.target,e.type,new Date());
	
	unload=localStorage.getItem("unload");
	unload=JSON.parse(unload);
	unload.push(evcha);
	localStorage.setItem("unload",JSON.stringify(unload));


}

function getrandomint() {
  return Math.floor((Math.random() * 26)+0 );
}
 


 var ul = document.getElementsByTagName("div")[1];
  ul.addEventListener("click", function(e){
		
		var evcha=new tevent(e.target,e.type,new Date());
		//	console.log(charc[e.target.value]);
		if(charc[e.target.value].length>0){
		charc[e.target.value]=localStorage.getItem(e.target.value);
		charc[e.target.value]=JSON.parse(charc[e.target.value]);	
		}
		charc[e.target.value].push(evcha);
		localStorage.setItem(e.target.value,JSON.stringify(charc[e.target.value]));
		//console.log(localStorage);
		var si=0;
		
		if(e.target.value!=null){
			e.target.setAttribute("class","yy");	
		var imgshow=document.getElementById("imgshow");
		imgshow.innerHTML="<img src='"+e.target.value+".PNG' height='300px' width='300px' align='center'> " + "<h2>"+item[e.target.value]+"</h2>";
		imgshow.style.width="300px";
		imgshow.style.height="300px";}
		
  });

//  Genetate buttons
butele.addEventListener("click",function(e){
	
	evcha=new tevent(e.target,e.type,e.timeStamp);
	Genetate=localStorage.getItem("Genetate");
	Genetate=JSON.parse(Genetate);
	Genetate.push(evcha);
	localStorage.setItem("Genetate",JSON.stringify(Genetate));
	
	
	var box=document.getElementById("id1");
	var v=parseInt(box.value);
	var div=document.getElementById("page");
	div.innerHTML="";
	imgshow.innerHTML="";
	for(var i =0;i<txt.length;i++)
	{
		ind[i]=false;
	}
	if(v<=26){
	for(var i = 0;i<v;)
	{
		var rund = getrandomint();
		if(ind[rund]==false)
		{
			ind[rund]=true;
			charc[ch[rund]]=[];
			//console.log(ch[rund]);
			i++;
			div.innerHTML+="<input type='button' value ='"+ch[rund]+"' style='padding:20px;'> \t\t" ;
		}
	}		
	}
	else{
		div.innerHTML="Enter number between 1 to 26";
	}

});

tevent=function (target, type, time){
  this.target=target;
  this.type=type;
  this.time=time;
}
$('#show').on("click",function(e){
	var str="";
	$.ajax({
    "type": "GET",
    "url": "project.php",
    "data": {"person": "asd"},
    "success": function(response){
    	if(response){
        var persons = JSON.parse(response);
     	//console.log(persons);
		for (x in persons)
		{
			str+=" Event Type is "+persons[x].etype+" <br> ";
			str+="Event Time is "+persons[x].etime+" <br> ";
			str+="Event Target is "+persons[x].etarget+" <br> ";
			str+="---------------------------------------------- <br> ";
		}
		console.log("asd");
		show.innerHTML=str;
		}
    }
});

}
)

/*
if(response){
       var edata = JSON.parse(response);
    	  //x.innerHTML=response;
		  console.log(edata);
    	  console.log("asd");
		  for(var i =0;i<edata.length;i++)
		  {
			  console.log(edata[i].eventdate)
		  }
    	}
*/