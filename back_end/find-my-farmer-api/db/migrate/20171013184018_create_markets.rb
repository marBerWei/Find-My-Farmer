class CreateMarkets < ActiveRecord::Migration[5.1]
  def change
    create_table :markets do |t|
    	t.integer :api_id
    	t.string :marketname
    	t.string :address
    	t.string :google_map
      t.timestamps
    end
  end
end
