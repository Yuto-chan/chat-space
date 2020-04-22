$(function(){
    function buildHTML(message){
      if (message.image.url) {
        var html = 
          `<div class="chat-main__message-list__user-info">
            <div class="chat-main__message-list__user-info__name">
              ${message.user_name}
              <div class="chat-main__message-list__user-info__day">
                ${message.created_at}
              </div>
            </div>
            <div class="chat-main__message-list__user-text">
              <p class="message-list__user-text">
                ${message.body}
                ${message.image}
              </p>
            </div>
          </div>`
        return html;
      } else {
        var html = 
          `<div class="chat-main__message-list__user-info">
            <div class="chat-main__message-list__user-info__name">
              ${message.user_name}
              <div class="chat-main__message-list__user-info__day">
                ${message.created_at}
              </div>
            </div>
            <div class="chat-main__message-list__user-text">
              <p class="message-list__user-text">
                ${message.body}
              </p>
            </div>
          </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
  
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
  
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $('.form-btn').prop( 'disabled', false)
      var html = buildHTML(data)
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      // ⬆️フォームを空にしないとどーなるん？
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});