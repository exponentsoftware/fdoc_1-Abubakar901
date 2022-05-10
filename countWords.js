
const paragraph = `I love teaching. If you do not 
love teaching what else can you love. I love 
JavaScript if you do not love something which 
can give life to your application what else 
can you love.`;

const countWords = (para, word_1, word_2) => {
  let regex = /[.,]/g;
  let temp = para.replace(regex, "");
  let countWord_1 = 0;
  let countWord_2 = 0;
  temp = temp.split(" ");
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].includes(word_1)) {
      countWord_1++;
    } 
    if (temp[i].includes(word_2)) {
      countWord_2++;
    } 
  }

  if(countWord_1 > countWord_2) {
    return `The word ${word_1} more frequently occurred than ${word_2}`;
  } else if(countWord_1 < countWord_2) {
    return `The word ${word_2} more frequently occurred than ${word_1}`;
  } else {
    return `The words ${word_1} occured same number of times.`
  }
};

console.log(countWords(paragraph,'love', 'you'));
