class StudentFormController < ApplicationController

  def create
    @student=Student.find(params[:userId])
    @form=Form.find(params[:classId])
    @studtimes=Studtime.new(student_id: @student.id, form_id: @form.id, month: params[:month])
    if !@form.students.include?(@student)
      @studtimes.save
    end
    add_date_and_month(params[:classId])
  end

  def get_class_users
    add_date_and_month(params[:form_id])
  end

  def add_date_and_month(form_id)
    res=[]
    @studtime=Studtime.where("form_id=?",form_id)
    @studtime.each do |st|
      students = Student.find(st.student_id)
      if !st.nil?
        res<<students.attributes.merge(added_at: st.created_at.to_time.to_i, month: st.month)
      end
    end
    render json: res
  end

  def destroy_student_from_class
    @form=Form.find(params[:classId])
    @student=@form.students.find(params[:id])
    if @form.students.delete(@student.id)
      render json: @student.id
    end

  end
end