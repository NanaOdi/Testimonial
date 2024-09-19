const testEl = [
    {
        name: "Elfi Blat",
        potoUrl: "https://images.unsplash.com/photo-1726487646639-ec039193792f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: " I recently had the pleasure of working with Lebenslauf to create my professional resume, and I cannot recommend their services enough. As someone who is not well-versed in crafting a strong resume, I was initially overwhelmed by the task. However, with the help of Lebenslauf, the process was smooth and stress-free."
    },
    {
        name: "Manfi Blat",
        potoUrl: "https://images.unsplash.com/photo-1726591383725-59f0d79a6a5d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Die Koordination der Aktivitäten hat sich durch den Lebenslauf eines Bewerbers enorm verbessert."
    },
    {
        name: "Mumy Mu",
        potoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Mit reviu vom person ist die Kommunikation zwischen uns allen viel effizienter. Ein Wendepunkt."
    },
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const uNameEl = document.querySelector(".uName");

let idx = 0;
updateTestimonial()

function updateTestimonial(){
    const {name, potoUrl, text} = testEl[idx];
    imgEl.src = potoUrl;
    textEl.innerText = text;
    uNameEl.innerText = name;
    idx++
    if(idx === testEl.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000)
}