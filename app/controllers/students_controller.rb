class StudentsController < ApplicationController

  def new
    @student = Student.new
  end

  def getStudent
    @student = Student.all
    render json: @student
  end

  def back_to_reg(old_student)

    if Student.exists?(old_student.id)
      Student.destroy(old_student.id)
    end
    render 'new'
  end

  def destroy_student
    @student = Student.find(params[:id])
    if @student = @student.destroy
      render json: @student
    end
  end

  def registration
    @student = Student.new(student_params)
    if params[:password]==params[:password_confirmation]
      if @student.save
        user=User.new(student_id: @student.id, login: params[:student][:user][:login], password: params[:password], role: 1)
        if user.valid?
          user.save
          log_in user
          flash[:success] = "Welcome!"
          render 'form/index'
        else
          flash.now[:danger] = 'User already exist'
          back_to_reg(@student)
        end
      else
        back_to_reg(@student)
      end
    else
      back_to_reg(@student)
    end
  end

  def get_students_forms
    if current_user.user.role.eql?('1')
      @forms=current_user.forms
    end
    if current_user.user.role.eql?('2')
      @forms=Form.all
    end
    render json:@forms
  end

  private
  def student_params
    params.require(:student).permit(:fname, :lname, :age)
  end
end

