const userName =document.getElementById("username");
const jobRole  =document.getElementById("jobrole");

const submitBtn=document.getElementById("submitData");
const resultLi=document.getElementById("result");

submitBtn.addEventListener("click",(e) =>{
e.preventDefault();

// insertinging value 
 if(userName.value.length===0 ||jobRole.value.length===0){
  resultLi.style.display="none";
  return;
}
let names=userName.value ;
let jobs=jobRole.value;

resultLi.style.display="block";





// jobrolefordevloper
const jobRoleOfEach=document.createElement("div");
jobRoleOfEach.textContent=jobs
if(jobs.toLocaleLowerCase()==='developer'){
  jobRoleOfEach.classList.add("developer-role")
}else{
  jobRoleOfEach.classList.add("other-role")
}




// removebtn 
const removeBtn=document.createElement("div");
removeBtn.textContent="X"
removeBtn.classList.add("remove")
removeBtn.addEventListener('click',()=>{
  const fullData=removeBtn.parentElement;
  fullData.remove();
})
// listCreating
const li = document.createElement("li");
li.innerText =`${names}`;
li.append(jobRoleOfEach)
li.appendChild(removeBtn)
resultLi.appendChild(li);


});