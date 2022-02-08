//Mixed Messages Codecademy Portfolio Project

//array of sewing tips
const sewingTips = [
    'Pre-wash your fabric',
    'Iron your seams',
    'Backstich the begining and ends of your seams',
    'Change your sewing machine needle after roughly 10 hours sewing time',
    'It is okay to seam rip and start again',
    
]

const generateTip = array => {
      return array[Math.floor(Math.random() * array.length)];
}

console.log(`Your sewing advice for today is: ${generateTip(sewingTips)}`);
