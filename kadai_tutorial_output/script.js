$(function(){
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);  $('.carousel').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
    });

  });
  
  $('.button-more').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
    }, 100);
  });
  
  // カーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

// 送信ボタンクリック時の処理
 $('#submit').on('click', function (event) {
  // formタグによる送信拒否
  event.preventDefault();
  // 入力チェックをした結果エラーがあるかないか判定
  let result = inputCheck();
 });

//  フォーカスが外れた時にフォームの入力チェックする
$('#name').blur(function(){
  inputCheck();
});
$('#hurigna').blur(function(){
  inputCheck();
});
$('#email').blur(function(){
  inputCheck();
});
$('#tel').blur(function(){
  inputCheck();
});
$('#message').blur(function(){
  inputCheck();
});
$('#agree').click(function(){
  inputCheck();
});


  // お問い合わせフォーム入力チェック
  function inputCheck(){
    // エラー時の結果
    let result;
// エラーメッセージテキスト
    let message = '';
    // エラーがなければfalse あればtrue

    let error = false;

    if ($('#name').val() == ''){
// エラーあり
      $('#name').css('background-color','#f79999');
      error=true;
      message += 'お名前を入力してください　\n';
    }else{
// えらーなし
      $('#name').css('background-color', '#fafafa')
    }
  
    if ($('#hurigana').val() == ''){
// エラーあり
      $('#hurigana').css('background-color','#f79999');
      error=true;
      message += 'フリガナを入力してください　\n';
    }else{
// えらーなし
      $('#name').css('background-color', '#fafafa')
    }
  
    // 問い合わせチェック
    if ($('#message').val() == ''){
// エラーあり
      $('#message').css('background-color','#f79999');
      error=true;
      message += 'お問い合わせ内容を入力してください　\n';
    }else{
// えらーなし
      $('#message').css('background-color', '#fafafa')
    }
    
    // メールアドレスのチェック
    if($#email).val() =='' || 
    $('#email').val().indexOf('@') == -1 || 
    $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
      }else {
        // エラーなし
        $('#email').css('background-color', '#fafafa');
      }
      
      // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
      if ($('#tel').val() != ''&&$('tel').val().index0f('-')== -1){
  // エラーあり
        $('#tel').css('background-color','#f79999');
        error=true;
        message +=  '電話番号に「-」が含まれていません　\n';
      }else{
  // えらーなし
        $('#message').css('background-color', '#fafafa')
      }
      
      
      
});