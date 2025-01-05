class User < ApplicationRecord
  validates :username, presence: true, uniqueness: { case_insensitive: false }, length: { minimum: 2 }


  # DEVISE-SPECIFIC CODE BELOW
  attr_writer :login

  def login
    @login || username || email
  end

  def self.find_for_database_authentication(tainted_conditions)
    conditions = tainted_conditions.dup
    login = conditions.delete(:login)

    where(conditions).where([
      "lower(username) = :value OR lower(email) = :value", { value: login.strip.downcase }
    ]).first
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  username               :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#
