

(function(){
    
    $.fn.bg=function(bgcolor){
        //this代表当前条用方法的对象
        this.css('background',bgcolor)
        return this
    },

    $.fn.fontC=function(fontcolor){
        //this代表当前条用方法的对象
        this.css('color',fontcolor)
        return this
    }

    console.log(2222) //校验冲突
    console.log(1111)  //校验冲突

})()
