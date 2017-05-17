class FormController < ApplicationController
  def startPage
    render 'form/index'
  end



  def create_class
    @form = Form.new(form_params)

    respond_to do |format|
      if @form.save
        format.html {}
        format.json {render json:@form}
      else
        format.html {}
        format.json {render json: 422}
      end
    end
  end

  def destroy_forms
    @form = Form.find(params[:id])

    if @form = @form.destroy
      render json: @form
    end

  end

  private
  def form_params
    params.require(:form).permit(:name)
  end

end
