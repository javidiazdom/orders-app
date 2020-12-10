/** Posibles estados: 
    CREATED,
    PREPARING,
    DONE
**/

CREATE TABLE IF NOT EXISTS orders (
    id integer PRIMARY KEY,
    client_name text NOT NULL,
    status text NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
    id integer PRIMARY KEY,
    order_id integer NOT NULL,
    quantity integer NOT NULL,
    name text NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (id)
);

INSERT INTO orders (id, client_name, status) VALUES (1,"Benito Cabrera","CREATED");

INSERT INTO items (id, order_id, quantity, name) VALUES (1, 1, 1, "Hamburguesa con queso");
INSERT INTO items (id, order_id, quantity, name) VALUES (2, 1, 2, "Papas de to'");
INSERT INTO items (id, order_id, quantity, name) VALUES (3, 1, 1, "Coca-cola");
