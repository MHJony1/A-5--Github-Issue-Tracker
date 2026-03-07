// function displayIssueCards(cards) {
//     cardContainer.innerHTML = "";

//     cards.forEach((card) => {
//         const issueCard = document.createElement("div");
//         issueCard.className = "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow";

//         // Accent bar color (Open vs Closed)
//         const accentColor = card.status === 'open' ? 'bg-emerald-500' : 'bg-purple-500';

//         // Priority Style Logic
//         const priorityStyles = {
//             high: "bg-red-100 text-red-500 border-red-100",
//             medium: "bg-yellow-50 text-yellow-600 border-yellow-200",
//             low: "bg-gray-100 text-gray-500 border-gray-200"
//         };
//         const pClass = priorityStyles[card.priority.trim().toLowerCase()] || "bg-red-50 text-red-500";

//         issueCard.innerHTML = `
//             <div class="h-1 ${accentColor} w-full"></div>
//             <div class="p-4 flex flex-col h-full">
//                 <div class="flex justify-between items-center mb-3">
//                     <img src="./assets/${card.status === 'open' ? 'Open-Status.png' : 'Closed-Status.png'}" class="w-5 h-5">
                    
//                     <span class="${pClass} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border">
//                         ${card.priority}
//                     </span>
//                 </div>

//                 <h3 class="text-gray-800 font-bold text-[15px] mb-2 leading-tight">${card.title}</h3>

//                 <p class="text-gray-400 text-[12px] mb-4 line-clamp-2 min-h-9 grow">
//                     ${card.description}
//                 </p>

//                 <div class="mt-auto">
//                     <div class="border-t border-gray-100 pt-3 text-[11px] text-gray-400">
//                         <p>#${card.id} by <span class="font-medium text-gray-600">${card.author}</span></p>
//                     </div>
//                 </div>
//             </div>
//         `;
//         cardContainer.appendChild(issueCard);
//     });
// }



issueCard.innerHTML = `
  <div class="h-1 ${card.status === 'open' ? 'bg-emerald-500' : 'bg-purple-500'} w-full"></div>

  <div class="p-4 flex flex-col h-full">
    <div class="flex justify-between items-center mb-3">
       <img src="./assets/${card.status === 'open' ? 'Open-Status.png' : 'Closed-Status.png'}" class="w-5 h-5">
       <span class="bg-red-50 px-3 py-1 rounded-full text-[10px] font-bold text-red-500 uppercase">${card.priority}</span>
    </div>

    <h3 class="text-gray-800 font-bold text-[15px] mb-2 leading-tight">
      ${card.title}
    </h3>

    <p class="text-gray-500 text-[12px] leading-normal mb-4 line-clamp-2 min-h-9">
      ${card.description}
    </p>

    <div class="mt-auto">
       <div class="flex flex-wrap gap-2 mb-4">
          ${card.labels.map(label => `<span class="bg-gray-100 px-2 py-0.5 rounded-full text-[10px] text-gray-600 font-bold uppercase">${label}</span>`).join('')}
       </div>
       <div class="border-t border-gray-100 pt-3 text-[11px] text-gray-400">
          <p>#${card.id} by <span class="font-medium text-gray-600">${card.author}</span></p>
          <p>${new Date(card.createdAt).toLocaleDateString()}</p>
       </div>
    </div>
  </div>
`;