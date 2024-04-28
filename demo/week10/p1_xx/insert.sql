CREATE TABLE product_23(
    id int not null PRIMARY KEY ,
    title varchar(255),
    price real,
    category varchar(255),
    img varchar(255),
    remote_img varchar(255),

);
UPDATE product_23 SET img = '/images/product-11.jpg' WHERE id = 11;

INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('1', 'Emperor Bed', '21.99', 'Liddy', './images/product-1.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('2', 'Accent Chair', '25.99', 'Caressa', './images/product-2.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('3', 'High-Back Bench', '9.99', 'Ikea', './images/product-3.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('4', 'Wooden Table', '19.99', 'Ikea', './images/product-4.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('5', 'Dining Table', '6.99', 'Caressa', './images/product-5.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('6', 'Entertainmint Center', '69.99', 'Liddy', './images/product-6.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('7', 'Albany Sectional', '10.99', 'Ikea', './images/product-7.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('8', 'Sofa Set', '69.99', 'Liddy', './images/product-8.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('9', 'Utopia Sofa', '69.99', 'Liddy', './images/product-9.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('10', 'Modern Bookshelf', '8.99', 'Marcos', './images/product-10.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('11', 'Albany Table', '79.99', 'Marcos', '/images/product-11.jpg', '');
INSERT INTO product_23 (id, title, price, category, img, remote_img) VALUES ('12', 'Leather Sofa', '39.95', 'Liddy', '/images/product-12.jpg', '');
