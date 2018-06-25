class Event < ApplicationRecord

  before_create :set_image, :set_background, :set_bordercolor

  Pictures = ["https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F63564%2Fimage%2F5b236ccab95caf68fae08b7ba25fa8aa.jpg?ixlib=rails-2.1.4&s=88374dc32b0e01fb43724c9c8934c27c", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F50162%2Fimage%2Fe8265c0c8da3d049cd90a41779f8f068.jpeg?ixlib=rails-2.1.4&s=e4c40f28d50555437afb37740fb765c6", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F66858%2Fimage%2F4355a2210c1e06f73b895c75261a133a.jpeg?ixlib=rails-2.1.4&s=85edab2dd9c76fcf716c8ebd03fe7c9a", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F63610%2Fimage%2F49a52199eaed81e4f85c006389628c40.jpg?ixlib=rails-2.1.4&s=d9c0aa5b9acc74759b988c0607949c46", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F60122%2Fimage%2F05adbcc699cd42fd7b3eecec5305b4ef.jpg?ixlib=rails-2.1.4&s=f6543f401b19ba570a4646a94becd067", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F63582%2Fimage%2F534bd1ca9fac6448e577cd503281699a.jpg?ixlib=rails-2.1.4&s=4524ee98f82e73ba73cd72ecc4678ecb", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F67904%2Fimage%2F4438c4a5289f40cc488563e3433dff8f.PNG?ixlib=rails-2.1.4&s=3d9f9b050f79f0d33dc0fa9e4725acee", "https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F63614%2Fimage%2F0ad3d61bd6a9041c06488b131a554c70.jpg?ixlib=rails-2.1.4&s=37634ab72361b6cbd136527199152399","https://qprime.imgix.net/https%3A%2F%2Fqprime-uploader-published-prod.s3.amazonaws.com%2Fstore%2Fevent%2F73728%2Fimage%2F4a4d309e64d94b463af96bd52fe92301.jpg?ixlib=rails-2.1.4&s=1f40548377d1e17d445f7c04215f209d"]
  
  def set_image
    self.image = Pictures[rand(Pictures.length)]
    # self.image = RandomImages::Image.get
    # suckr = ImageSuckr::GoogleSuckr.new
    # self.image = suckr.get_image_url
  end

  def set_background
    color = "%06x" % (rand * 0xffffff)
    self.background = "#" + color
  end

  def set_bordercolor
    color = "%06x" % (rand * 0xffffff)
    self.bordercolor = "#" + color
  end


end
