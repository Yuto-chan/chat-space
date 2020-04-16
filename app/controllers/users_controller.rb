class UsersController < ApplicationController

  def edit
  end
  #createで作れるのでeditに何も記述する必要がないの？

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
      #部分テンプレートでeditアクション(showの画面)を実行してるん？
    end
  end  

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
