$(function(){

  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();  //フォームの値を取得して変数に代入する
    $.ajax({
      type: "GET",
      url: "/users",
      dataType: { keyword: input },
      data: "json",
    })
      .done(function(users) {
        console.log("大成功です");
      })
      .fail(function() {
        console.log("失敗です");
      });
  });
});
