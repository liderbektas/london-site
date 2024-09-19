class Cart:
    def __init__(self, request):
        self.session = request.session
        cart = self.session.get("cart")

        if not cart:
            cart = self.session["cart"] = {}

        self.cart = cart

    def add(self, item):
        item_id = str(item.id)

        if item_id not in self.cart:
            self.cart[item_id] = {
                "name": item.name,
                "description": item.description,
                "image_url": item.image.url
            }
        self.session.modified = True
