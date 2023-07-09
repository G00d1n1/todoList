
const planLists = document.querySelector('#planLists')
const notes = [
  'убрать комнату', 
  'приготовить ужин'
]

addPlan.addEventListener('click',function(){
  if(formPlans.value == 0){return}
  planLists.insertAdjacentHTML('beforeend', getNewPlan(formPlans.value))
  notes.push(formPlans.value)
  formPlans.value = ''

  planDelete ()
  dataAttr()
  dataCanceled()
})

function render(){
  for(let i = 0; i < notes.length; i++){
    planLists.insertAdjacentHTML("beforeend",  getNewPlan(notes[i]))
  }
}
render()

function getNewPlan(title){
  return `
  <div class="myPlansList">
        <div class="numbers">--</div>
        <div class="plans">${title}</div>
        <div class="complete">
          <span class="completeBtn"><img  src="complete.png" alt=""></span>
          <span class="dangerBtn"><img src="danger.png" alt=""></span>
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
    })
  });
}
planDelete ()

function dataAttr(){
  let completeBtn = document.querySelectorAll('.completeBtn')
  completeBtn.forEach(element => {
    element.addEventListener('click',function(e){
      let plans = element.closest('.myPlansList')
      let plansCancel = plans.querySelector('.plans')
      plansCancel.setAttribute('data-status', 'completed')
    })
  });
}
dataAttr()

function dataCanceled(){
  let completeBtn = document.querySelectorAll('.dangerBtn')
  completeBtn.forEach(element => {
    element.addEventListener('click',function(e){
      let plans = element.closest('.myPlansList')
      let plansCancel = plans.querySelector('.plans')
      plansCancel.setAttribute('data-status', 'empty')
    })
  });
}
dataCanceled()