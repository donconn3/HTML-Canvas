const canvas = new fabric.Canvas('canvas', {
    width: 600,
    height:300,
    backgroundColor:'#fff'
})

let file = document.getElementById('img-field');
file.addEventListener('change', function(){
    let img = file.files[0]
    if(!img){
        return
    }
    let reader = new FileReader();

    reader.onload = function(e){
        let data = reader.result
        fabric.Image.fromURL(data, function(img){
            canvas.add(img)
            if(img.width > canvas.width){
                img.scaleToWidth(canvas.width)
            }
        })
    }
    reader.readAsDataURL(img);
})

let addTextBtn = document.getElementById('add-text');
let text = document.getElementById('text-field');

addTextBtn.addEventListener('click', function(){
    let _text = new fabric.Text(text.value, {
        left:100,
        top:100,
        fontSize:20,
        fill: 'rgb(0, 0, 0)'
    })
    canvas.add(_text)
})