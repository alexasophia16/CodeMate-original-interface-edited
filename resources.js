
async function loadJSON(path){const r=await fetch(path);if(!r.ok)throw new Error(path);return r.json()}
function getStored(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch(e){return f}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

(async()=>{const u=await CodeMateSession.getCurrentUser(),base=await loadJSON("mock-resources.json");let a=getStored("codemate_resources",base);if(u.role==="tutor")upload-btn.hidden=false;function render(){resource-list.innerHTML=a.filter(x=>x.status==="approved"||u.role==="admin"||x.author===u.name).map(x=>'<div class="role-card"><span class="role-pill">'+x.course+'</span><h2 style="margin-top:8px">'+esc(x.title)+'</h2><p>'+x.type+' · '+esc(x.author)+'</p><button class="role-btn secondary" style="margin-top:10px">Preview</button></div>').join("")}upload-btn.onclick=()=>upload-card.hidden=!upload-card.hidden;upload-form.onsubmit=e=>{e.preventDefault();a.push({id:"res"+Date.now(),title:title.value,course:course.value,type:type.value,author:u.name,status:"pending"});save("codemate_resources",a);upload-form.reset();render();alert("Resource submitted for moderation.")};render()})();
