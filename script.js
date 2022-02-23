//console.dir(window.screen);
//console.dir(screen);// то же самое
//console.dir(document)


// измерение высоты и ширины рабочего окна
/*

window.addEventListener('resize', () => {

  const height = document.documentElement.clientHeight
  const width = document.documentElement.clientWidth

  console.log('clientHeight', height);
  console.log('clientWidth', width);

})



window.addEventListener('scroll', () => {

  const top = document.documentElement.scrollTop  // скролл невидимая часть окна по вертикали в пикселях но без их указания
  const left = document.documentElement.scrollLeft

  console.log('top', top);
  console.log('left', left);

})

const btn= document.getElementById('btn')


btn.addEventListener('click',() =>{
  document.documentElement.scrollTop =100 // прокрутка на 100пх вниз при клике на кнопку

})

*/
const btn = document.getElementById('btn')
const block = document.querySelector('.block')

const clientHeight=block.clientHeight
const clientWidth=block.clientWidth

// console.log('clientHeight', clientHeight)
// console.log('clientWidth',clientWidth)
//высчитанный размер , оригинальный размер узнаём через offsetHeight

// через scrollWidth узнаём реальную ширину скрытого контекста

const scrollHeight = block.scrollHeight
const scrollWidth = block.scrollWidth

// btn.addEventListener('click', ()=> {
//   block.style.height = `${block.scrollHeight+17+2}px`
//   block.style.width = `${block.scrollWidth+17+2}px`
// })


//--- выдаёт передвижение скролля  ----
// btn.addEventListener('click', () => {
//   console.log(block.scrollTop);
//   console.log(block.scrollLeft);
// })


// //--- пемещать скролл  ----
// btn.addEventListener('click', () => {
//   block.scrollTop =100
//   block.scrollLeft = 100
// })

// btn.addEventListener('click', () => {
//   block.scrollTop += 10
//   block.scrollLeft += 10
// })


// btn.addEventListener('click', () => {
//   block.scrollTo(0, 10)
// })

// btn.addEventListener('click', () => {
//   block.scrollBy(10,10)
// })

btn.addEventListener('click', () => {
  console.log(block.getBoundingClientRect());
})

btn.addEventListener('click', () => {
  console.log(block.getBoundingClientRect().top);
})