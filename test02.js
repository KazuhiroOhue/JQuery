(function($, window) {
    $(function() {
        // この中に処理を書きます
        var i = 0;
        while (i <= 2) {
            var a = $('#index').find('li').eq(i).text();
            alert(a + a.length + "文字");
            i++
        }
       
    });
})(jQuery, window);