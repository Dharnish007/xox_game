function reset() {
    $("div.box h1").text("");
    $("h3").text("Player1");
}
function scan() {
    let b1 = $("div.b1 h1").text()
    let b2 = $("div.b2 h1").text()
    let b3 = $("div.b3 h1").text()
    let b4 = $("div.b4 h1").text()
    let b5 = $("div.b5 h1").text()
    let b6 = $("div.b6 h1").text()
    let b7 = $("div.b7 h1").text()
    let b8 = $("div.b8 h1").text()
    let b9 = $("div.b9 h1").text()
    if (((b1==='X') && (b2==='X') && (b3==='X')) || ((b4==='X') && (b5==='X') && (b6==='X')) || ((b7==='X') && (b8==='X') && (b9==='X')) || ((b1==='X') && (b4==='X') && (b7==='X')) || ((b2==='X') && (b5==='X') && (b8==='X')) || ((b3==='X') && (b6==='X') && (b9==='X')) || ((b1==='X') && (b5==='X') && (b9==='X')) || ((b3==='X') && (b5==='X') && (b7==='X'))) {
        alert("Player1 won...")
        reset()
    }
    else if (((b1==='O') && (b2==='O') && (b3==='O')) || ((b4==='O') && (b5==='O') && (b6==='O')) || ((b7==='O') && (b8==='O') && (b9==='O')) || ((b1==='O') && (b4==='O') && (b7==='O')) || ((b2==='O') && (b5==='O') && (b8==='O')) || ((b3==='O') && (b6==='O') && (b9==='O')) || ((b1==='O') && (b5==='O') && (b9==='O')) || ((b3==='O') && (b5==='O') && (b7==='O'))) {
        alert("Player2 won...")
        reset()
    }
    else {
        if ((b1!=="")  && (b2!=="") && (b3!=="") && (b4!=="") && (b5!=="") && (b6!=="") && (b7!=="") && (b8!=="") && (b9!=="")) {
            alert("Draw ...")
            reset()
        }
    }
    
}
$("div.b1").on("click",function() {
    const $box = $("div.b1 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b1 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b1 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b2").on("click",function() {
    const $box = $("div.b2 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b2 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b2 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b3").on("click",function() {
    const $box = $("div.b3 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b3 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b3 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b4").on("click",function() {
    const $box = $("div.b4 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b4 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b4 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b5").on("click",function() {
    const $box = $("div.b5 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b5 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b5 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b6").on("click",function() {
    const $box = $("div.b6 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b6 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b6 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b7").on("click",function() {
    const $box = $("div.b7 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b7 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b7 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b8").on("click",function() {
    const $box = $("div.b8 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b8 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b8 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})
$("div.b9").on("click",function() {
    const $box = $("div.b9 h1");
    if ($box.text()==="") {
        if ($("h3").text()==='Player1'){
            $("h3").text("Player2");
            $("div.b9 h1").text("X");
            setTimeout(scan, 0.7);;
        }
        else {
            $("h3").text("Player1");
            $("div.b9 h1").text("O");
            setTimeout(scan, 0.7);;
        }
    }
})



