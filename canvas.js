const canvas = new fabric.Canvas('canvas', {
    width: 800,
    height:400,
    backgroundImage: "product-background.jpg"
    //backgroundColor:'#fff'
})

function addTextBox(){
    let _mfg = new fabric.Text("Manufacturer", {
        left:10,
        top:10,
        fontSize:50,
        fill: 'rgb(255, 198, 0)'
    });
    let _description = new fabric.Text("1911 9mm Stainless SA Pistol \nMore TExt Here", {
        left:10,
        top:60,
        fontSize:28,
        fill: 'rgb(0, 0, 0)'
    });
    let _style = new fabric.Text("00128ABC", {
        left:10,
        top:130,
        fontSize:16,
        fill: 'rgb(0, 0, 0)'
    });
    let _price = new fabric.Text("$941.99", {
        left:10,
        top:320,
        fontSize:60,
        fill: 'rgb(255, 198, 0)'
    });
    canvas.add(_mfg);
    canvas.add(_description);
    canvas.add(_style);
    canvas.add(_price);
}
addTextBox();
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
            canvas.add(img);
            if(img.width > canvas.width){
                img.scaleToWidth(canvas.width);
                
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