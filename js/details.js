function set_produto(id){
    //paths_images_produtos[id]
    var content = ``
    var ids = ``
    var index = 0
    var first = true
    for(let image of paths_images_produtos[id]){
        ids += `<li data-target="#carouselExampleIndicators" data-slide-to="${index}"></li>`
        content += `<div class="carousel-item${first ? " active" : ""}">
            <img src="${image}" class="d-block w-100 image-slide-detalhes">
        </div>`
        first = false
        index++
    }
    document.getElementById("carousel-controller-slides-items").innerHTML = ids
    document.getElementById("carousel-slide-items").innerHTML = content
}

function details_start(){
    var url_splited = url.split('?')
    var all_info_get = url_splited.length > 1 ? url_splited[1] : null
    if(all_info_get != null){
        let info_get = all_info_get.split('&')
        info_get.forEach(g => {
            let splited = g.split('=')
            if(splited.length == 2)
                if(splited[0] == "id_produto")
                    set_produto(splited[1])
        });
    }
}

details_start()