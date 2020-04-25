json.user_name @message.user.name
# ⬆️(左)usersテーブルのnameカラムという意味のキー？　⬆️(右)なんでuser_nameじゃないん？
#A. 左側の名前は正直なんでもいい/messageファイル？の情報(入力された情報)のuserテーブルのnameカラムってこと
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.body @message.body
json.image @message.image_url
json.id @message.id