const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const item=document.getElementsByClassName("item");
const form1=document.querySelector(".form1");
const form2=document.querySelector(".form2");
const form3=document.querySelector(".form3");



item[0].onclick=function(){
	item[0].style.backgroundColor="#dedee1";
	item[1].style.backgroundColor="#d4d4d5";
	item[2].style.backgroundColor="#d4d4d5";
	form1.style.display="block";
	form2.style.display="none";	  
	form3.style.display="none";
}

		item[1].onclick=function(){
			item[1].style.backgroundColor="#dedee1";
			item[0].style.backgroundColor="#d4d4d5";
			item[2].style.backgroundColor="#d4d4d5";
			
			form2.style.display="block";	  
			form1.style.display="none";	  
	form3.style.display="none";
			
		}
		
		item[2].onclick=function(){
			item[2].style.backgroundColor="#dedee1";
			item[1].style.backgroundColor="#d4d4d5";
			item[0].style.backgroundColor="#d4d4d5";
			
			form3.style.display="block";
	form1.style.display="none";	  
	form2.style.display="none";
			
		}
		
				
function show1(){
			document.getElementById('f1').style.display ='block';
			document.getElementById('f2').style.display ='none';
			
		  }
function show2(){
			document.getElementById('f1').style.display ='none';
			document.getElementById('f2').style.display ='block';
		  }