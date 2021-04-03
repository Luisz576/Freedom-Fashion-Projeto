//CONST
const now = new Date()
const url = document.URL
const paths_images_produtos = [['./images/produtos/camisa.jpg', './images/produtos/clothes_2.jpg'], ['./images/produtos/casaco_azul.jpg'], ['./images/produtos/clothes_2.jpg'], ['./images/produtos/f_1.jpg'], ['./images/produtos/f_2.jpg'], ['./images/produtos/f_3.jpg'], ['./images/produtos/c6.jpg'], ['./images/produtos/c7.jpg', './images/produtos/c7_2.jpg'], ['./images/produtos/c8.jpg', './images/produtos/c8_2.jpg']]

//SET DATA
document.getElementById('ano').innerHTML = now.getFullYear()

function share_link() {
    var hidden = document.createElement("hidden")
  
    //Some
    hidden.style.position = 'fixed'
    hidden.style.top = 0
    hidden.style.left = 0
    hidden.style.width = '2em'
    hidden.style.height = '2em'
    hidden.style.padding = 0
    hidden.style.border = 'none'
    hidden.style.outline = 'none'
    hidden.style.boxShadow = 'none'
    hidden.style.background = 'transparent'
    hidden.value = url
  
    document.body.appendChild(hidden)
    if(hidden.select){
        hidden.select()
        try {
            var successful = document.execCommand('copy')
            var msg = successful ? 'Copiado!' : 'Não foi possível copiar'
            alert(msg)
        } catch (err) {
            alert('Não tenho permissão para copiar por você!')
            window.prompt("Link:", url)
        }
    }else{
        alert('Não consegui copiar por você!')
        window.prompt("Link:", url)
    }
  
    document.body.removeChild(hidden)
  }