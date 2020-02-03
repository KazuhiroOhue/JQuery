(function($, window) {
    $(function() {
        // この中に処理を書きます
       $('#index').find('li').each(function() {
           var x = ($(this).text().length);
           $(this).append("[" + x + "文字]");
       });
    });
})(jQuery, window);