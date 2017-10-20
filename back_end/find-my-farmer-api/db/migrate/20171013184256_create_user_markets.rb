class CreateUserMarkets < ActiveRecord::Migration[5.1]
  def change
    create_table :user_markets do |t|
    	t.integer :user_id
    	t.integer :market_id
      t.timestamps
    end
  end
end
