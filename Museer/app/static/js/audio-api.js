window.AudioContext = window.AudioContext||window.webkitAudioContext;

var AC = new AudioContext();
var gainNode = AC.createGain();

gainNode.gain.value = 1

var midBufferSource;
var music_list = []
// var audio = $(".music-player")[0];

var app = {
    init:function(){
      this.load('/music/');
      this.load('/music2/');
    },

    // bind: function(){
    //   audio.onended = function(){
    //     app.trigger(singleLoop ? nowIndex : (nowIndex + 1));
    //   };
    //
    // },

    load:function(url){
      var request = new XMLHttpRequest();
      request.open('GET',url,true);
      request.responseType = 'arraybuffer';
      var mdata = {
        buffer: null
      }
      music_list.push(mdata);
      request.onload = function(){
        console.log('test:' + request.response);
        AC.decodeAudioData(request.response,function(buffer){
            mdata.buffer = buffer;
            console.log(music_list);
        }, function(e){"Error with decoding audio data:" + e.err});
      }
      request.send();
    },

    play:function(index){
      if(midBufferSource){
        try{
          console.log('fuck2:'+midBufferSource)
          this.stop();
        }catch(err){

        }
      }
      var source = AC.createBufferSource();
      midBufferSource = source;
      console.log(music_list[index].buffer);
      midBufferSource.buffer = music_list[index].buffer;//  告诉音频源 播放哪一段音频
      midBufferSource.connect(gainNode);// 连接到输出源
      gainNode.connect(AC.destination)
      midBufferSource.start(0);//开始播放
    },

    stop:function(){
      midBufferSource.stop();
      midBufferSource.disconnect(gainNode);
      gainNode.disconnect(AC.destination);
      console.log('fuckF:' + midBufferSource);
    }
}

app.init();
