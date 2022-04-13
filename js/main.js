function DOM(ele){
  return document.querySelector(ele)
}

DOM('button').addEventListener('click',startBattle)

function startBattle(){

let url = 'https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json'

fetch(url)
  .then(res=>res.json())
  .then(data=>{

    let random = Math.round(Math.random()*338)

    DOM('#player').src = data[random].extraAssets.charaGraph.ascension[4]
    DOM('#playAtk').innerText = data[random].atkMax
    DOM('#playName').innerText = data[random].name
    DOM('#playHP').innerText = data[random].hpMax
    DOM('#playRarity').innerText = data[random].rarity
    DOM('#playClass').innerText = data[random].className

    let random2 = Math.round(Math.random()*338)
    if(random !== random2){
      DOM('#opponent').src = data[random2].extraAssets.charaGraph.ascension[4]
      DOM('#oppAtk').innerText = data[random2].atkMax
      DOM('#oppName').innerText = data[random2].name
      DOM('#oppHP').innerText = data[random2].hpMax
      DOM('#oppRarity').innerText = data[random2].rarity
      DOM('#oppClass').innerText = data[random2].className
    }

    if(data[random2].atkMax>data[random].atkMax){
      DOM('.prompt').innerText = 'You Lost!'
    }else if(data[random2].atkMax<data[random].atkMax){
      DOM('.prompt').innerText = 'You Won!'
    }else{
      DOM('.prompt').innerText = 'It is a tie!'
    }
    })

}