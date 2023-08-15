
const planLists = document.querySelector('#planLists')
const notes = [
  'убрать комнату', 
  'приготовить ужин'
]

document.addEventListener('keydown',(e)=>{
  if(e.keyCode == 13){
    if(formPlans.value == 0){return}
    planLists.insertAdjacentHTML('beforeend', getNewPlan(formPlans.value))
    notes.push(formPlans.value)
    formPlans.value = ''

    planDelete ()
    dataReady()
    dataCanceled()
    listNumbers()
  }
})
addPlan.addEventListener('click',function(){
  if(formPlans.value == 0){return}
  planLists.insertAdjacentHTML('beforeend', getNewPlan(formPlans.value))
  notes.push(formPlans.value)
  formPlans.value = ''

  planDelete ()
  dataReady()
  dataCanceled()
  listNumbers()
  // document.querySelector('#emptyPlan').remove()
  
})

function render(){
  for(let i = 0; i < notes.length; i++){
    planLists.insertAdjacentHTML("beforeend",  getNewPlan(notes[i]))
  }
}
render()

function getNewPlan(title){
  return `
    <div class="myPlansList" draggable='true'>
      <div class="numbers">--</div>
      <div class="plans" contenteditable="true">${title}</div>
      <div class="complete">
        <span class="completeBtn"><img  src="complete.png" alt=""></span>
        <span class="dangerBtn"><img src="close.png" alt=""></span>
      </div>
      <div class="trash" id="trash">
        <span><img src="trash.png" alt=""></span>
      </div>
    </div>
  `
}

      // удаление дел
function planDelete (){
  let trash = document.querySelectorAll('.trash')
  trash.forEach(element => {
    element.addEventListener('click',function(){
      let planClose = element.closest('.myPlansList')
      planClose.remove()
      listNumbers()
      // emptyNumbers()
    })
  });
}
planDelete ()

      // пустой список
// function emptyNumbers(){
//   if(planLists.children.length == 0){
//     planLists.insertAdjacentHTML('beforeend', '<p id="emptyPlan">Список дел пуст</p>')
//   }
// }

      // выполнено
function dataReady(){
  let completeBtn = document.querySelectorAll('.completeBtn')
  completeBtn.forEach(element => {
    element.addEventListener('click',function(){
      let plans = element.closest('.myPlansList')
      let plansCancel = plans.querySelector('.plans')
      plansCancel.setAttribute('data-status', 'completed')
    })
  });
}
dataReady()
      // убрать выполнение
function dataCanceled(){
  let completeBtn = document.querySelectorAll('.dangerBtn')
  completeBtn.forEach(element => {
    element.addEventListener('click',function(){
      let plans = element.closest('.myPlansList')
      let plansCancel = plans.querySelector('.plans')
      plansCancel.setAttribute('data-status', 'empty')
    })
  });
}
dataCanceled()

      // нумерация списка задач
function listNumbers(){
  for(let i = 0; i < planLists.children.length; i++){
    let children = planLists.children[i]
    let child = children.querySelector('.numbers')
    child.textContent = i + 1

    if(planLists.children.length == 0){
      planLists.insertAdjacentHTML('beforeend', '<p id="emptyPlan">Список дел пуст</p>')
    }
  }
}
listNumbers()

      // редактирование задания
// function correctWork(){
//   let changes = document.querySelectorAll('.plans')
//   changes.forEach(element => {
//     element.addEventListener('click',function(e){
//       let oldEl = e.target.innerHTML 
//       console.log(element)
  
//       // element.appendChild(div)
//       element.insertAdjacentHTML('beforeend', `<p class="plans">${oldEl}</p>`)
//     })
//   });

// }
// // пробовать через map?
// correctWork()


// изменить уже созданное дело
// добавить раздел закрепленные дела
// обдумать концепцию drag and drop.

