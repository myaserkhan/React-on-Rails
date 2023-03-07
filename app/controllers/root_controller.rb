class RootController < ApplicationController
  def index; end

  def random_msg
    @msg = Greeting.find(Greeting.pluck(:id).sample)
    render json: @msg
  end
end
