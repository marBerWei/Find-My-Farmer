class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
    	t.string :title
    	t.string :publisher
    	t.string :f2f_url
    	t.string :source_url
    	t.string :recipe_id
    	t.string :image_url
    	t.float :social_rank
    	t.string :publisher_url
      t.timestamps
    end
  end
end