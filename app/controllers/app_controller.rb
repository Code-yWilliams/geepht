class AppController < ApplicationController
  def index
    @config = {
      environment: Rails.env
    }
  end
end
