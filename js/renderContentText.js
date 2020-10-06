function renderContentText(text) {
   const shortTextLength = 60;
   const normalTextLength = 300;
   const largeTextLength = 10000;
   const textLength = text.length;
   
//kai labai mazai teksto - padidint srifta;
if (textLength <= shortTextLength) {
   return `<p class="big-font">${text}</p>`;

   } else if (textLength <= normalTextLength) {
  //kai normaliai teksto - tiesiog atvaziduojam; 
   return `<p>${text}</p>`;

   } else if (textLength <= largeTextLength) {
   // kai teksto labai daug - nukerpam ir pridedam ".... See more"    
   let shorterText = '';
   for (let i = 0; i < normalTextLength; i++) {
      shorterText += text[i];
   }
      return `<p>${shorterText} + <span class="see-more">...See more</span></p>`;
   
   } else {
   //o jei teksto daugiau nei leidziama maximaliai - rodom klaida
   console.warn(`Error: virsytas leistinas maksimalus ${largeTextLength} teksto ilgis`);
   return '';
 }

}

export default renderContentText;