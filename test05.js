(function($, window) {
    $(function() {
        $('#login').on('click', login);
        
        function login() {
            var email = $('#email').val(),
                password = $('#password').val();
            //alert(email);
            //alert(password);
            if (email == '') {
                alert('メールアドレスを入力してください');
            } else if(email.indexOf('@') < 0) {
                alert('メールアドレスには必ず「@」が必要です');
            }
            if (password == '') {
                alert('パスワードを入力してください');
            } else if (password.length < 6) {
                alert('パスワードは６文字以上必要です');
            }
        }
    });
})(jQuery, window);