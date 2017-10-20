class CreateRecipeIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :recipe_ingredients do |t|
    	t.integer :recipe 
    	t.integer :ingredient
      t.timestamps
    end
  end
end
