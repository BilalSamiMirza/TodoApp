var a = document.getElementById('main')
var inp =  document.getElementById('inp')

function delAll(){
      main.innerHTML = ""
      
}


function createElem(){
      var p = document.createElement('P')
      var txt = document.createTextNode(inp.value)

      p.appendChild(txt)
      // p.innerHTML = b.value;
      p.setAttribute('class','para')
      p.setAttribute('id','pl')

      var delBtn = document.createElement("BUTTON")
      var delLabel = document.createTextNode('Delete')
      delBtn.appendChild(delLabel)
      delBtn.setAttribute('onclick','delTodo(this)')
      p.appendChild(delBtn)


      // console.log(p)

      a.appendChild(p)
      // console.log(b.value);

}

function delTodo (elem){
      var p = elem.parentNode
      p.remove()

}

