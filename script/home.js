// toggle button fucntionality
  const allBtn = document.getElementById("allBtn");
  const openBtn = document.getElementById("openBtn");
  const closedBtn = document.getElementById("closedBtn");

function toggleBtn(id){
  const buttons = [allBtn, openBtn, closedBtn];
  buttons.forEach(btn => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-soft");
  });

  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");
  selected.classList.remove("btn-soft");
}



// dynamic card creation
const cardContainer = document.getElementById("cardContainer");
async function loadIssueCards() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
  const data = await res.json();
  displayIssueCards(data.data);
}

//card info
// {
//     "id": 44,
//     "title": "Add favorites/bookmarks feature",
//     "description": "Allow users to bookmark frequently accessed pages or items for quick access.",
//     "status": "open",
//     "labels": [
//         "enhancement",
//         "good first issue"
//     ],
//     "priority": "low",
//     "author": "fav_frank",
//     "assignee": "",
//     "createdAt": "2024-02-07T10:30:00Z",
//     "updatedAt": "2024-02-07T10:30:00Z"
// }

function displayIssueCards(cards) {
  cardContainer.innerHTML = "";
  cards.forEach((card) => {
    // console.log(card);
    const issueCard = document.createElement("div");
    issueCard.className = `bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow`;

     // Accent bar color (Open vs Closed)
        const accentColor = card.status === 'open' ? 'bg-emerald-500' : 'bg-purple-500';
      
      // Priority Style set
      const priorityStyles = {
        high: "bg-red-100 text-red-500 ",
        medium: "bg-yellow-100 text-yellow-500 ",
        low: "bg-gray-100 text-gray-500 "
      };
      const prStyles = priorityStyles[card.priority.toLowerCase()] || "bg-red-50 text-red-500"; 

      // Assignee faka thakle 'Unassigned' dekhabe
       const assigneeName = card.assignee || "Unassigned";

   

    issueCard.innerHTML = `
   
       <div class="h-1 ${accentColor} w-full"></div>
    
           <div class="p-4 flex flex-col h-full">
                 <div class="flex justify-between items-center mb-3">
                  <div>
                     <img src="./assets/${card.status === 'open' ? 'Open-Status.png' : 'Closed-Status.png'}" alt="${card.status}">
                  </div>
                   <span class="${prStyles}  px-4 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wider">
                     ${card.priority}
                   </span>
                 </div>
               
                 <h3 class="text-gray-800 font-bold text-[16px] leading-tight   mb-2">${card.title}</h3>
               
                 <p class="text-gray-500 text-s[12px] leading-normal line-clamp-2  mb-4 grow">${card.description}</p>
               
                 <div class="flex flex-wrap gap-2 mb-4">
                 ${card.labels.map(label => `<span class="bg-orange-100 px-2 py-0.5 rounded-full text-[10px] text-orange-600 font-bold uppercase">${label}</span>`).join('')}
                 </div>

                  <div class=" border-t-2 border-gray-200 pt-3 mt-auto">
                   <div class="text-[11px] text-gray-400 flex justify-between items-center">
                     <p class="text-sm">#${card.id} <span class="font-medium text-gray-600">${card.author}</span></p>
                     <p>${new Date(card.createdAt).toLocaleDateString()}</p>
                   </div>
                   <div class="text-[11px] text-gray-400 flex justify-between items-center">
                     <p><span class="font-medium text-gray-500">Assignee:</span> ${assigneeName}</p>
                     <p>update: ${new Date(card.updatedAt).toLocaleDateString()}</p>
                   </div>

                 </div>
                 
               </div>
    `;

    cardContainer.appendChild(issueCard);
  })
}

loadIssueCards();



  // <span class="flex items-center gap-1 bg-red-100 border border-red-100 px-2 py-0.5 rounded-full text-red-500 text-sm font-bold">
  //                    <i class="fa-solid fa-bug text-[8px]"></i> BUG
  //                  </span>
  //                  <span class="flex items-center gap-1 bg-yellow-100 border border-orange-100 px-2 py-0.5 rounded-full text-orange-500 text-smfont-bold">
  //                    <i class="fa-solid fa-circle-info text-[8px]"></i> HELP WANTED
  //                  </span>