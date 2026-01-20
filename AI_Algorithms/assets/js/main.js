// Dark Mode
const toggle=document.getElementById("toggle");
if(localStorage.getItem("dark")==="on"){
 document.body.classList.add("dark");
}
toggle?.addEventListener("click",()=>{
 document.body.classList.toggle("dark");
 localStorage.setItem(
  "dark",
  document.body.classList.contains("dark")?"on":"off"
 );
});

// Active Menu
document.querySelectorAll("nav a").forEach(a=>{
 if(a.href===location.href)a.classList.add("active");
});

// Accordion
document.querySelectorAll(".accordion").forEach(acc=>{
 acc.onclick=()=>{
  const panel=acc.nextElementSibling;
  panel.style.display=panel.style.display==="block"?"none":"block";
 };
});

// Quiz
function checkQuiz(){
 const ans=document.querySelector('input[name="q"]:checked');
 const result=document.getElementById("result");
 if(!ans){result.innerText="กรุณาเลือกคำตอบ";return;}
 result.innerText=ans.value==="correct"
 ?"✅ ถูกต้อง! AI ช่วยลดอคติในการประเมิน"
 :"❌ ยังไม่ถูก ลองทบทวนเนื้อหาอีกครั้ง";
}
