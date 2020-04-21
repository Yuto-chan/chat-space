json.user_name @message.user.name
# ⬆️(左)usersテーブルのnameカラムという意味のキー？　⬆️(右)なんでuser_nameじゃないん？
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.body @message.body
json.image @message.image_url
# ⬆️特定のurlを持ってきたいから_imageがついてるって認識でOK?