class Task
  include Mongoid::Document

  field :name, type: String
  field :flag, type: Boolean, default: false

  def as_json(options = {})
    json = super(options)
    json["id"] = self.id.to_s
    json.delete "_id"
    json
  end

end
