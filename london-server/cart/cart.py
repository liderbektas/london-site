class Cart:
    def __init__(self, request):
        self.session = request.session
        cart = self.session.get("cart")

        if not cart:
            cart = self.session["cart"] = {}

        self.cart = cart
    def add(self, item, size, price, salad_toppings=None, sauce_toppings=None, quantity=1):
        item_id = str(item.id)

        if item_id not in self.cart:
            self.cart[item_id] = {
                "item_id": item_id,
                "name": item.name,
                "size": size,
                "price": str(price),
                "description": item.description,
                "image_url": item.image.url,
                "salad_toppings": salad_toppings or [],
                "sauce_toppings": sauce_toppings or [],
                "quantity": quantity,
            }
        self.session.modified = True