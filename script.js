const screens = [...document.querySelectorAll(".screen")];
function showScreen(id){
  screens.forEach(s=>s.classList.toggle("active",s.id===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("openGate").addEventListener("click",()=>{
  const leaves=document.querySelectorAll(".gate-leaf");
  leaves.forEach((leaf,i)=>{leaf.style.transition="transform 1.8s cubic-bezier(.2,.8,.2,1)";leaf.style.transform=i===0?"perspective(800px) rotateY(-105deg)":"perspective(800px) rotateY(105deg)";});
  document.querySelector(".heart-lock").style.transition="opacity .5s";
  document.querySelector(".heart-lock").style.opacity="0";
  setTimeout(()=>showScreen("giftScreen"),1500);
});
function openGift(){document.querySelector(".gift-box").style.transition="transform .7s";document.querySelector(".gift-box").style.transform="translateY(-35px) scale(1.08)";setTimeout(()=>{showScreen("wishScreen");launchFireworks();},550)}
document.getElementById("openGift").addEventListener("click",openGift);
document.getElementById("giftButton").addEventListener("click",openGift);
document.getElementById("toGallery").addEventListener("click",()=>showScreen("galleryScreen"));
document.getElementById("toLetter").addEventListener("click",()=>{showScreen("letterScreen");typeLetter();});
const letter = `My dearest Mahh,

Aaj ka din sirf ek wish karne ka nahi, balki tumhe yaad dilane ka hai ki tum kitni special ho.

I hope you never forget how precious you are. Tumhari smile, tumhari little habits, tumhara way of being you — these little things make you beautifully one of a kind.

Main chahta hoon ki tumhari life mein hamesha happiness, peace, confidence aur countless reasons to smile rahein. Jab bhi tum khud ko ordinary samjho, yaad rakhna: kisi ki duniya mein tum genuinely extraordinary ho.

You deserve kindness on your hardest days, laughter on your quiet days, and magic in the most ordinary moments. Keep being the lovely person you are.

HAPPIESTTT PRINCESS DAYY MAHH SUPU 🤭 👑

~ BY UR BINU`;
let typingStarted=false;
function typeLetter(){
  if(typingStarted)return;typingStarted=true;
  const el=document.getElementById("typedLetter");let i=0;
  const cursor=document.querySelector(".letter-cursor");
  function step(){if(i<letter.length){el.textContent+=letter.charAt(i++);setTimeout(step,27)}else{cursor.style.display="none";document.getElementById("finalButton").classList.remove("hidden")}}
  step();
}
document.getElementById("finalButton").addEventListener("click",()=>{showScreen("finalScreen");startHeartRain()});
document.getElementById("replay").addEventListener("click",()=>{location.reload()});
function launchFireworks(){
  const field=document.getElementById("fireworks");
  for(let i=0;i<24;i++){const s=document.createElement("span");s.textContent=["✦","✧","·","✺"][i%4];s.style.position="absolute";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*75+"%";s.style.fontSize=(12+Math.random()*24)+"px";s.style.color=i%2?"#ff9bc9":"#f3d99b";s.style.textShadow="0 0 18px currentColor";s.style.animation=`twinkle ${1+Math.random()*2}s infinite alternate`;field.appendChild(s)}
}
function startHeartRain(){const field=document.getElementById("heartRain");setInterval(()=>{const h=document.createElement("span");h.className="heart";h.textContent=["♡","♥","✧"][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+"%";h.style.fontSize=(12+Math.random()*20)+"px";h.style.animationDuration=(4+Math.random()*4)+"s";field.appendChild(h);setTimeout(()=>h.remove(),8500)},260)}
// Gentle ambient sparkles
const sparkleLayer=document.getElementById("sparkles");
for(let i=0;i<22;i++){const s=document.createElement("span");s.className="sparkle";s.textContent="✧";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.fontSize=(8+Math.random()*12)+"px";s.style.animationDelay=Math.random()*3+"s";sparkleLayer.appendChild(s)}
// Music button is ready for an optional music.mp3 file.
const soundBtn=document.getElementById("soundToggle"), audio=document.getElementById("bgMusic");
soundBtn.addEventListener("click",async()=>{if(!audio.querySelector("source")){soundBtn.querySelector("span").textContent="Add music.mp3";return;}if(audio.paused){try{await audio.play();soundBtn.querySelector("span").textContent="Music on"}catch(e){soundBtn.querySelector("span").textContent="Tap again"}}else{audio.pause();soundBtn.querySelector("span").textContent="Music off"}});
  
