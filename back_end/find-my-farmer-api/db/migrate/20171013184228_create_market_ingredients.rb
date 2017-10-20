class CreateMarketIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :market_ingredients do |t|
    	t.integer :market_id 
    	t.integer :ingredient_id
      t.timestamps
    end
  end
end
