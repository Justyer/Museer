$('#play-music').on('click', function(){
    // loadSound('/music/');
    app.play(0);
});

$('#play-music2').on('click', function(){
    app.play(1);
});

$('#stop-music').on('click', function(){
    app.stop();
});

$('#mute-music').on('click', function(){
    var ismuti = !!gainNode.gain.value;
    gainNode.gain.value = ismuti ? 0 : 1;
    console.log('vm' + gainNode.gain.value);
});

$('#add-vol').on('click', function(){
    var add = gainNode.gain.value;
    gainNode.gain.value = add + 0.1;
    console.log('va' + gainNode.gain.value);
});

$('#pop-vol').on('click', function(){
    var pop = gainNode.gain.value;
    gainNode.gain.value = pop - 0.1;
    console.log('vp' + gainNode.gain.value);
});
