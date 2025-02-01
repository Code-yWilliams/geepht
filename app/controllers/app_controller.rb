class AppController < ApplicationController
  before_action :authenticate_user!
  def index
    @config = {
      environment: Rails.env
    }
  end
end
