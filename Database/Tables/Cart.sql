CREATE TABLE Cart
(
    cartId VARCHAR(100) PRIMARY KEY NOT NULL,
    productId VARCHAR(100) NOT NULL,
    userId VARCHAR(100)NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (productId) REFERENCES Products(productId),
    FOREIGN KEY (userId) REFERENCES Users(userId)
);